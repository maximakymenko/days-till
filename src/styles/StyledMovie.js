import styled from 'styled-components';

export const StyledMovie = styled.div`
  position: relative;
  display: flex;
  margin: 1rem;
  box-shadow: ${props => props.theme.primaryShadow};
  flex: 1;
  flex-direction: column;

  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
  }

  div {
    padding: 1rem 1rem 5rem 1rem;

    @media (max-width: ${props => props.theme.mobile}) {
      text-align: center;
    }
  }

  img {
    object-fit: cover;
  }

  h3 {
    font-size: ${props => props.theme['fs3-1']};
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
