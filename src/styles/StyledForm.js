import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 30rem;
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

  button {
    margin-top: 1rem;
    padding: 0.7rem 4rem;
    font-size: ${({ theme }) => theme.fs3};
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    color: ${({ theme }) => theme.primaryColorLight};
    background: transparent;
    transform: scale(0.9);
    transition:
      box-shadow 0.4s ease-in-out,
      transform 0.2s 0.25s ease-in-out;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.primaryColorLight};

    :hover {
      transform: scale(1);
      box-shadow: inset 0 0 0 3px ${({ theme }) => theme.primaryColorLight};
    }
  }
`;
