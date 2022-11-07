import React from 'react'
import { Portal } from 'react-portal'
import ScrollLock from './other/ScrollLock'
import useTouch from './hooks/useTouch'
import LightBoxMain from './LightboxMain'
import useLightbox from './useLightbox'
import useLightboxRef from './hooks/useLightboxRef'

const Lightbox = (props) => {
  const {
    images,
    preloadCount,
    openToIndex,
    openOnMount = false,
    imgCount,
    showNavArrows = true
  } = props

  const lightboxRef = useLightboxRef()
  const { lightbox, lightboxControl } = useLightbox({ images, isOpen, preloadCount, openToIndex, openOnMount })
  const touch = useTouch({ onTouchLeft: lightboxControl.moveNext, onTouchRight: lightboxControl.movePrev })

  if (lightbox.isOpen) {
    return (
      <Portal isOpen={lightbox.isOpen}>
        <ScrollLock scrollNode={lightboxRef} reserveScrollBarGap />
        <LightBoxMain
          currIndex={lightbox.photoIndex}
          isOpen={lightbox.isOpen}
          isOpening={lightbox.isOpening}
          imgCount={imgCount}
          loadedImages={lightbox.loadedImages}
          showNavArrows={showNavArrows}
          lightboxRef={lightboxRef}
          onClick={lightbox.open}
          onClose={lightbox.close}
          onMoveNext={lightbox.moveNext}
          onMovePrev={lightbox.movePrev}
          onKeyDown={lightbox.handleKeyDown}
          onTouchEnd={touch.onTouchEnd}
          onTouchStart={touch.onTouchStart}
          tabIndex="0"
        />
      </Portal>
    )
  }
  return null
}

export default Lightbox
