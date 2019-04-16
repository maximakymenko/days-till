import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.red};

  h1 {
    font-size: ${props => props.theme.fs1};
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  margin: 2rem;
  border: 1px solid white;

  img {
    border-radius: 0 1.5rem 1.5rem 0;
    object-fit: contain;
  }

  h3 {
    font-size: ${props => props.theme.fs2};
    text-align: center;
  }
`;
