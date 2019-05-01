import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  position: absolute;
  text-align: center;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;
