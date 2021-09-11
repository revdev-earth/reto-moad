import styled from "styled-components/macro"

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 40px 0;

  &:after {
    content: "";
    height: 1px;
    width: 100%;
    background: linear-gradient(0.25turn, #ee8f00, #50d98b, #00c0f5);
    position: absolute;
    bottom: 0;
  }
`
