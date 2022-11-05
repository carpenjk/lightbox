import styled from 'styled-components'
import { condition } from '@carpenjk/prop-x/css'

export default styled.div`
  width: 100%;
  height: 35vh;
  max-height: 450px;

  overflow: hidden;
  z-index: 10003;
  z-index: 9999999;

  ${condition('isOpen')`
    height: 100%;
    max-height: none;
    background-color: black;
    
    -ms-content-zooming: none;
    -ms-user-select: none;
    -ms-touch-select: none;
    touch-action: none;

    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
  `}
`
