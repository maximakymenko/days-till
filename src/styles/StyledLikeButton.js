import styled from 'styled-components';

export const StyledLikeButton = styled.button`
  position: absolute;
  bottom: 2%;
  left: 50%;
  text-align: center;
  border: none;
  background: transparent;
  transform: translateX(-50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  img {
    width: 3rem;
    height: 3rem;
    filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale(100%)')};
  }
`;
