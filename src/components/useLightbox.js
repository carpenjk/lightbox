import { useState, useRef, useEffect } from 'react'

const useLightbox = ({ images, photoIndex, isOpen }) => {
  const [lightbox, setLightbox] = useState({
    images,
    photoIndex,
    isOpen
  })

  useEffect(() => setLightbox((prev) => ({
    ...prev,
    images,
    photoIndex: 0
  })), [images])

  //* ******** event handlers **************
  const handleMoveNext = useRef(() => {
    // calculate new index
    function updateIndexNext (prevIndex, imgs) {
      if (prevIndex < imgs.length - 1) {
        return prevIndex + 1
      }
      return prevIndex
    }
    // udate index state
    setLightbox((prev) => ({
      ...prev,
      photoIndex: updateIndexNext(prev.photoIndex, prev.images)
    }))
  }).current

  const handleMovePrev = useRef(() => {
    // calculate new index
    function updateIndexPrev (prevIndex) {
      if (prevIndex !== 0) {
        return prevIndex - 1
      }
      return prevIndex
    }
    // set index state
    setLightbox((prev) => ({
      ...prev,
      photoIndex: updateIndexPrev(prev.photoIndex)
    }))
  }).current

  const handlePhotoClick = useRef((i) => {
    setLightbox((prev) => ({ ...prev, photoIndex: i, isOpen: true }))
  }).current

  const handleLightboxClose = useRef((e) => {
    setLightbox((prev) => ({ ...prev, photoIndex: 0, isOpen: false }))
    e.stopPropagation()
  }).current

  const handleLightboxOpen = useRef(() => {
    setLightbox((prev) => ({ ...prev, isOpen: true }))
  }).current

  const lightboxControl = useRef({
    handleLightboxClose,
    handleLightboxOpen,
    handleMoveNext,
    handleMovePrev,
    handlePhotoClick
  }).current

  return {
    lightbox,
    lightboxControl
  }
}

export default useLightbox
