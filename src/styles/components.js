import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.red};
`;

export const MovieContainer = styled.div`
  border: 1px solid white;
  background: red;
`;
