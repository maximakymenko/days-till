import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 2rem;
  font-weight: bold;
  text-align: center;

  h1 {
    display: inline-block;
    padding: 0.5em 1rem;
    font-size: ${props => props.theme.fs1};
    border: solid 5px snow;
    border-radius: 25px;
  }
`;
