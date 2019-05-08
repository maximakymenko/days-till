import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 30rem;
  }

  .error {
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.primaryRed};
  }

  input {
    width: 90%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fs3};
    font-weight: bold;
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.primaryColorDark};
  }

  div {
    margin-left: 1rem;
  }

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

  a {
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.primaryColorLight};
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.primaryYellow};
    }
  }
`;
