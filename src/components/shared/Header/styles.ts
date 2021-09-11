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
    background: linear-gradient(0.25turn, #f69d3c, #ebf8e1, #3f87a6);
    position: absolute;
    bottom: 0;
  }
`
