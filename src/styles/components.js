import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.orange};

  h1 {
    font-size: ${props => props.theme.fs1};
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  width: 40rem;
  margin: 2rem;
  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.5);

  div {
    padding: 1rem;
  }

  img {
    object-fit: cover;
  }

  h3 {
    font-size: ${props => props.theme.fs2};
  }

  p {
    font-size: ${props => props.theme.fs3};
  }

  span {
    display: block;
    font-size: ${props => props.theme.fs2};
    font-weight: bold;
  }
`;
