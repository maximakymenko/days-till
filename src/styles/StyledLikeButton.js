import styled from 'styled-components';

export const StyledLikeButton = styled.button`
  text-align: center;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  img {
    width: 3rem;
    height: 3rem;
    filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale(100%)')};
  }
`;
