import React from 'react'
import StyledCloseButton from './styled/StyledCloseButton'
import StyledLightboxHeader from './styled/StyledLightboxHeader'

const LightboxHeader = ({ currIndex, imgCount, onClose }) => (
  <StyledLightboxHeader>
    <StyledCloseButton onClick={onClose}>X Close</StyledCloseButton>
    <span>{`${currIndex + 1}/${imgCount}`}</span>
  </StyledLightboxHeader>
)

export default LightboxHeader
