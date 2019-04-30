import styled from 'styled-components';

export const StyledHeader = styled.header`
  font-weight: bold;
  text-align: center;

  h1 {
    display: inline-block;
    padding: 0.5em 1rem;
    font-size: ${props => props.theme.fs1};
    color: ${props => props.theme.primaryYellow};
    border-radius: 25px;
  }
`;
