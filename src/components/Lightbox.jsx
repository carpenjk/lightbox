import React from 'react'
import { Portal } from 'react-portal'
import ScrollLock from './other/ScrollLock'
import useTouch from './hooks/useTouch'
import LightBoxMain from './LightboxMain'
import useLightboxRef from './hooks/useLightboxRef'

const Lightbox = (props) => {
  const {
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
          lightboxControl={lightboxControl}
          lightboxState={lightboxState}
          showNavArrows={showNavArrows}
          lightboxRef={lightboxRef}
          onTouchEnd={touch.onTouchEnd}
          onTouchStart={touch.onTouchStart}
        />
      </Portal>
    )
  }
  return null
}

export default Lightbox
