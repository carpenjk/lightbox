import styled from 'styled-components'
import { breakpoint, condition } from '@carpenjk/prop-x/css'

export default styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  cursor: pointer;

  ${condition('isOpen')`
    position: relative;
    top: 50px;
    margin: 0 auto;
    height: calc(100% - 100px);
    cursor: revert;
  `}

  > div {
    z-index: 1;
  }

  ${breakpoint(1)`
    position: relative;
    top: 112px !important;
    margin: 0 auto;
    height: calc(100% - 224px) !important;
    width: calc(100% - 192px) !important;
`}
`
