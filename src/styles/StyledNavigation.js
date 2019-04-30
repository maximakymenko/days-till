import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;

  a {
    font-size: ${props => props.theme.fs1};
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.primaryColorLight};
  }
`;
