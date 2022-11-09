import React, { useEffect, useRef, useState, useMemo } from 'react'
import { unwindProps } from '@carpenjk/prop-x'
import LightboxArrow from './LightboxArrow'
import LightboxHeader from './LightboxHeader'
import LightboxCounter from './LightboxCounter'
import StyledLightboxMain from './styled/StyledLightBoxMain'
import StyledOuterContainer from './styled/StyledOuterContainer'
import StyledInnerContainer from './styled/StyledInnerContainer'
import StyledTrack from './styled/StyledTrack'
import StyledArrowWrapper from './styled/StyledArrowWrapper'

const LightBoxMain = ({
  lightboxState,
  lightboxControl,
  showNavArrows,
  lightboxRef,
  onTouchStart,
  onTouchEnd
}) => {
  const {
    close,
    handleKeyDown,
    moveNext,
    movePrev
  } = lightboxControl

  const {
    photoIndex,
    isOpen,
    count,
    loadedImages
  } = lightboxState

  const [isHovered, setIsHovered] = useState(false)
  const leftButtonRef = useRef(null)
  const rightButtonRef = useRef(null)

  const isLeftButtonDisabled = photoIndex === 0
  const isRightButtonDisabled = photoIndex === count - 1

  useEffect(() => {
    if (isLeftButtonDisabled && rightButtonRef.current) {
      rightButtonRef.current.focus()
      return undefined
    }
    if (isRightButtonDisabled && leftButtonRef.current) {
      leftButtonRef.current.focus()
    }
  }, [isLeftButtonDisabled, isRightButtonDisabled])

  function handleMouseEnter () {
    setIsHovered(true)
  }
  function handleMouseLeave () {
    setIsHovered(false)
  }
  const hideArrows = useMemo(
    () =>
      unwindProps({ showNavArrows }).map(
        (v) =>
          (!isHovered && v.showNavArrows === 'hover') ||
          v.showNavArrows === false
      ),
    [showNavArrows, isHovered]
  )

  return (
    <StyledLightboxMain
      isOpen={isOpen}
      ref={lightboxRef}
      onKeyDown={handleKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex="0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledOuterContainer>
        {isOpen && (
          <>
            <LightboxHeader
              currIndex={photoIndex}
              imgCount={count}
              onClose={close}
            />
            <LightboxCounter currIndex={photoIndex} imgCount={count} />
          </>
        )}
        <StyledInnerContainer isOpen={isOpen}>
          <StyledTrack
            slideIndex={photoIndex}
            count={count}
            isOpen={isOpen}
          >
            {loadedImages &&
              loadedImages.map((img) => (
                <div key={img.src}>
                  <img {...img} />
                </div>
              ))}
          </StyledTrack>
        </StyledInnerContainer>
        {isOpen && showNavArrows && (
          <>
            <StyledArrowWrapper left="calc(0.5% + 10px)">
              <LightboxArrow
                direction="left"
                onClick={movePrev}
                disabled={isLeftButtonDisabled}
                buttonRef={leftButtonRef}
                hide={hideArrows}
              />
            </StyledArrowWrapper>
            <StyledArrowWrapper right="calc(0.5% + 10px)">
              <LightboxArrow
                direction="right"
                onClick={moveNext}
                disabled={isRightButtonDisabled}
                buttonRef={rightButtonRef}
                hide={hideArrows}
              />
            </StyledArrowWrapper>
          </>
        )}
      </StyledOuterContainer>
    </StyledLightboxMain>
  )
}
export default LightBoxMain
