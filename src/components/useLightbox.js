import { useState, useRef, useEffect, useLayoutEffect } from 'react'

const useLightbox = ({ images, preloadCount, openToIndex, openOnMount }) => {
  const [isOpen, setIsOpen] = useState(openOnMount)
  const [photoIndex, setPhotoIndex] = useState(openToIndex)
  const [loadedImages, setLoadedImages] = useState(images.slice(0, photoIndex + preloadCount))
  const [isOpening, setIsOpening] = useState(isOpen)

  //* **************effects************** */
  // preLoad Images
  useEffect(() => {
    setLoadedImages(images.slice(0, photoIndex + preloadCount))
  }, [images, photoIndex, preloadCount]);

  // turns transition off on slide for better opening effect
  useLayoutEffect(() => {
    if (isOpen) {
      setIsOpening(true)
    }
  }, [isOpen])

  // turns transition back on once open
  useEffect(() => {
    if (isOpening) {
      setIsOpening(false)
    }
  }, [isOpening])

  //reset to 0 if new set of images provided
  useEffect(() => setPhotoIndex(0), [images])

  //* ******** event handlers **************
  const moveNext = useRef(() => setPhotoIndex(
    (prev) =>  prev < images.length - 1 ? prev + 1 : prev)
  ).current
  const movePrev = useRef(() => setPhotoIndex((prev) =>  prev !== 0 ? prev - 1 : prev)).current

  const handlePhotoClick = useRef((i) => {
    if(i){
      setPhotoIndex(i)
    }
    setIsOpen(true);
  }
  ).current

  const close = useRef((e) => {
    setIsOpen(false);
    setPhotoIndex(0);
    e.stopPropagation()
  ).current

  const open = useRef((i) => {
    setLightbox((prev) => ({ ...prev, isOpen: true }))

  }).current

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
    lightbox: {
      isOpen,
      photoIndex,
      loadedImages
    },
    lightboxControl
  }
}

export default useLightbox
