import { useRef, useReducer } from 'react'

const useLightbox = ({ images, preloadCount, openToIndex = 0, openOnMount = false }) => {
  function reducer (state, action) {
    switch (action.type) {
      case 'next':
        return {
          ...state,
          photoIndex: state.photoIndex < images.length - 1
            ? state.photoIndex + 1
            : state.photoIndex,
          loadedImages: images.slice(0, state.photoIndex + preloadCount)
        }
      case 'prev':
        return {
          ...state,
          photoIndex: state.photoIndex !== 0
            ? state.photoIndex - 1
            : state.photoIndex
        }
      case 'open': {
        const photoIndex = action.payload ? action.payload : state.photoIndex
        return {
          ...state,
          isOpen: true,
          photoIndex,
          loadedImages: images.slice(0, photoIndex + preloadCount)
        }
      }
      case 'close':
        return {
          ...state,
          isOpen: false,
          photoIndex: 0
        }
      default:
        throw new Error()
    }
  }

  const [state, control] = useReducer(
    reducer,
    {
      isOpen: openOnMount,
      photoIndex: openToIndex,
      loadedImages: images.slice(0, openToIndex + preloadCount)
    })

  const moveNext = useRef(() => control({ type: 'next' })).current
  const movePrev = useRef(() => control({ type: 'prev' })).current
  const close = useRef(() => control({ type: 'close' })).current
  const open = useRef((i) => {
    const payload = Number.isInteger(i) ? i : undefined
    return control({ type: 'open', payload })
  }).current

  const handlePhotoClick = useRef((i) => open(i)).current

  const handleKeyDown = useRef((e) => {
    switch (e.key) {
      case 'ArrowLeft':
        movePrev(e)
        break
      case 'ArrowRight':
        moveNext(e)
        break
      case 'Escape':
        close(e)
        break
      default:
        break
    }
  }).current

  const lightboxControl = useRef({
    close,
    open,
    moveNext,
    movePrev,
    handleKeyDown,
    handlePhotoClick
  }).current

  return {
    lightboxState: state,
    lightboxControl
  }
}

export default useLightbox
