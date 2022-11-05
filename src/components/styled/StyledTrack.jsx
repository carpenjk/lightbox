import styled from 'styled-components'
import { condition } from '@carpenjk/prop-x/css'

export default styled.div`
  display: inline-block;
  height: 100%;
  width: ${({ count }) => count * 100}%;
  position: relative;
  top: 0;
  left: 0;

  transform: translate(${({ count, slideIndex }) => slideIndex * (1 / count) * -100}%);
  transition: transform 1s;

  ${condition('isOpening')`
    transition: none;
  `}

  > div {
    display: inline-block;
    position: relative;
    height: 100%;
    width: ${({ count }) => (1 / count) * 100}%;
  }

  > div > img {
    touch-action: pinch-zoom;
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${condition('isOpen')`
      object-fit: contain;
    `}
  }
`
