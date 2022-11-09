import { useRef, useReducer } from 'react'

const useLightbox = ({ images, preloadCount, openToIndex = 0, openOnMount = false }) => {
  function getLoadedImages (imgs, n, i) {
    return imgs.slice(0, i + n)
  }

  // set or create initial values
  function initValues ({ images, openOnMount, openToIndex, preloadCount }) {
    return {
      isOpen: openOnMount,
      photoIndex: openToIndex,
      loadedImages: getLoadedImages(images, preloadCount, openToIndex),
      count: images.length
    }
  }

  function reducer (state, action) {
    switch (action.type) {
      case 'next':
        return {
          ...state,
          photoIndex: state.photoIndex < images.length - 1
            ? state.photoIndex + 1
            : state.photoIndex,
          loadedImages: getLoadedImages(images, preloadCount, state.photoIndex)
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
          loadedImages: getLoadedImages(images, preloadCount, photoIndex)
        }
      }
      case 'close':
        return {
          ...state,
          isOpen: false,
          photoIndex: 0
        }
      case 'set': {
        const { payload } = action
        const _openOnMount = payload.openOnMount !== undefined ? payload.openOnMount : state.openOnMount
        const _openToIndex = payload.openToIndex !== undefined ? payload.openToIndex : state.openToIndex
        const _preloadCount = payload.preloadCount !== undefined ? payload.preloadCount : state.preloadCount
        return initValues({
          images: payload.images || state.images,
          openOnMount: _openOnMount,
          openToIndex: _openToIndex,
          preloadCount: _preloadCount
        })
      }
      default:
        throw new Error()
    }
  }

  const [state, control] = useReducer(
    reducer,
    initValues({ images, openOnMount, openToIndex, preloadCount })
  )

  // control api functions
  const moveNext = useRef(() => control({ type: 'next' })).current
  const movePrev = useRef(() => control({ type: 'prev' })).current
  const close = useRef(() => control({ type: 'close' })).current
  const setImages = useRef((props) => control({
    type: 'set',
    payload: props
  })).current
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
    setImages,
    handleKeyDown,
    handlePhotoClick
  }).current

  return {
    lightboxState: state,
    lightboxControl
  }
}

export default useLightbox
