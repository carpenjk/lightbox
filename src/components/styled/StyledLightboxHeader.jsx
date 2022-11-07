import styled from 'styled-components'
import { breakpoint } from '@carpenjk/prop-x/css'

export default styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;

  ${breakpoint(1)`
    top: calc(112px - 64px);
  `}

  > span {
    position: relative;
    margin: 0 auto;
  }
`
