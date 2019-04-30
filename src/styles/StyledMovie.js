import styled from 'styled-components';

export const StyledMovie = styled.div`
  margin: 1rem;
  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.5);
  flex: 1;

  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
  }

  div {
    position: relative;
    padding: 1rem;

    @media (max-width: ${props => props.theme.mobile}) {
      text-align: center;
    }
  }

  img {
    object-fit: cover;
  }

  h3 {
    font-size: ${props => props.theme.fs2};
    text-align: center;
  }

  p {
    max-height: 15rem;
    font-size: ${props => props.theme.fs3};
  }

  span {
    display: block;
    font-size: ${props => props.theme.fs2};
    font-weight: bold;
    text-align: center;
  }
`;
