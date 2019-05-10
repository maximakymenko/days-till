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

  img {
    width: 3rem;
    height: 3rem;
    transition: filter 0.3s ease-in-out;
    filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale(100%)')};

    &:focus,
    &:hover {
      filter: ${props => (props.active ? 'grayscale(20%)' : 'grayscale(30%)')};
    }
  }
`;
