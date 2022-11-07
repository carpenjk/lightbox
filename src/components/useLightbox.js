import { useRef, useReducer } from 'react'

const useLightbox = ({ images, preloadCount, openToIndex = 0, openOnMount = false }) => {
  // const [isOpen, setIsOpen] = useState(openOnMount)
  // const [photoIndex, setPhotoIndex] = useState(openToIndex)
  // const [loadedImages, setLoadedImages] = useState(images.slice(0, photoIndex + preloadCount))

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
      case 'open':
        return {
          ...state,
          isOpen: true,
          photoIndex: action.payload
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

  //* **************effects************** */
  // preLoad Images
  // useEffect(() => {
  //   setLoadedImages(images.slice(0, photoIndex + preloadCount))
  // }, [images, photoIndex, preloadCount])

  // reset to 0 if new set of images provided
  // useEffect(() => setPhotoIndex(0), [images])

  //* ******** event handlers **************
  // const moveNext = useRef(() => setPhotoIndex(
  //   (prev) => prev < images.length - 1 ? prev + 1 : prev)
  // ).current

  // const movePrev = useRef(() => setPhotoIndex((prev) => prev !== 0 ? prev - 1 : prev)).current

  // const close = useRef((e) => {
  //   setIsOpen(false)
  //   setPhotoIndex(0)
  //   e.stopPropagation()
  // }).current

  // const open = useRef((i) => {
  //   if (i) {
  //     setPhotoIndex(i)
  //   }
  //   setIsOpen(true)
  // }).current

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
