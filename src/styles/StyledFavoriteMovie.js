import styled from 'styled-components';

export const StyledFavoriteMovie = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 15rem;
  margin: 1rem auto;
  box-shadow: ${props => props.theme.primaryShadow};

  @media (max-width: ${props => props.theme.tablet}) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 100%;
    padding: 1rem;
    text-align: center;

    @media (max-width: ${props => props.theme.tablet}) {
      padding-bottom: 5rem;
    }
  }

  img {
    width: 10rem;

    @media (max-width: ${props => props.theme.tablet}) {
      width: 20rem;
    }
  }

  .like-button {
    position: absolute;
    left: 90%;

    img {
      width: 3rem;
    }
  }
`;
