import styled from 'styled-components';

export const StyledLikeButton = styled.div`
  text-align: center;
  background: transparent;

  img {
    width: 3rem;
    height: 3rem;
    filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale(100%)')};
  }
`;
