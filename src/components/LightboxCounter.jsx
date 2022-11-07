import React from 'react'
import StyledCounter from './styled/StyledCounter'

const LightboxCounter = ({ currIndex, imgCount }) => (
  <StyledCounter>
    {currIndex + 1}/{imgCount}
  </StyledCounter>
)

export default LightboxCounter
