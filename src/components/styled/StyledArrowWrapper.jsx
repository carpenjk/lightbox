import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left || 'unset'};
  right: ${({ right }) => right || 'unset'};
  width: 70px;
  height: 70px;
  z-index: 1000;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: transparent;
`
