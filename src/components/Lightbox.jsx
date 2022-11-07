import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Portal } from 'react-portal'
import ScrollLock from './other/ScrollLock'
import useTouch from './hooks/useTouch'
import LightBoxMain from './LightboxMain'
import useLightboxRef from './hooks/useLightboxRef'

const Lightbox = (props) => {
  const {
    // images,
    // preloadCount,
    // openToIndex,
    imgCount,
    showNavArrows = true,
    lightboxState,
    lightboxControl
  } = props

  const lightboxRef = useLightboxRef()
  const [isOpening, setIsOpening] = useState(lightboxState.isOpen)
  const touch = useTouch({ onTouchLeft: lightboxControl.moveNext, onTouchRight: lightboxControl.movePrev })

  // turns transition off on slide for better opening effect
  useLayoutEffect(() => {
    if (lightboxState.isOpen) {
      setIsOpening(true)
    }
  }, [lightboxState.isOpen])

  // turns transition back on once open
  useEffect(() => {
    if (isOpening) {
      setIsOpening(false)
    }
  }, [isOpening])

  if (lightboxState.isOpen) {
    return (
      <Portal isOpen={lightboxState.isOpen}>
        <ScrollLock scrollNode={lightboxRef} reserveScrollBarGap />
        <LightBoxMain
          currIndex={lightboxState.photoIndex}
          isOpen={lightboxState.isOpen}
          isOpening={isOpening}
          imgCount={imgCount}
          loadedImages={lightboxState.loadedImages}
          showNavArrows={showNavArrows}
          lightboxRef={lightboxRef}
          onClick={lightboxControl.open}
          onClose={lightboxControl.close}
          onMoveNext={lightboxControl.moveNext}
          onMovePrev={lightboxControl.movePrev}
          onKeyDown={lightboxControl.handleKeyDown}
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
