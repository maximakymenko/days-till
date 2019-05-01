import styled from 'styled-components';

export const StyledFavoriteMovie = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  margin: 1rem auto;
  box-shadow: ${props => props.theme.primaryShadow};

  @media (max-width: ${props => props.theme.mobile}) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  img {
    width: 10rem;
  }

  button {
    display: none;
  }

`;
