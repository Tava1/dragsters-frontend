import styled from 'styled-components';

export const Container = styled.main`
  width: 400px;
  margin: 150px auto;

  h2 {
    color: var(--red);
    font-size: 2rem;
    margin: 2rem 0;
  }

  .forgotten-password {
    margin-top: 1rem;
    color: var(--red);
    
    display: flex;
    justify-content: flex-end;
    
    a {
      text-decoration: underline;
    }
  }

  .or {
    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      width: 100%;
      border-bottom: 1px solid var(--red);
    }
    span {
      color: var(--red);
      font-weight: bold;
      padding: 0 1rem;
    }
  }
`;
