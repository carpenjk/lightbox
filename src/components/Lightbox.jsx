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

  const lightboxRef = useLightboxRef(lightboxState.isOpen)
  const touch = useTouch({ onTouchLeft: lightboxControl.moveNext, onTouchRight: lightboxControl.movePrev })

  if (lightboxState.isOpen) {
    return (
      <Portal isOpen={lightboxState.isOpen}>
        <ScrollLock scrollNode={lightboxRef} reserveScrollBarGap />
        <LightBoxMain
          currIndex={lightboxState.photoIndex}
          isOpen={lightboxState.isOpen}
          imgCount={imgCount}
          loadedImages={lightboxState.loadedImages}
          showNavArrows={showNavArrows}
          lightboxRef={lightboxRef}
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
