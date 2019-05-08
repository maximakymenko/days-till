import styled from 'styled-components';

export const StyledLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    margin-top: 1rem;
    padding: 0.7rem 4rem;
    font-size: ${({ theme }) => theme.fs3};
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    color: ${({ theme }) => theme.primaryColorLight};
    background: ${({ theme }) => theme.primaryColorDark};
    transition:
      box-shadow 0.4s ease-in-out,
      background 0.3s 0.25s ease-in-out;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primaryColorLight};

    :hover,
    :focus {
      background: ${({ theme }) => theme.primaryColorDarkHover};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.primaryColorLight};
    }
  }
`;
