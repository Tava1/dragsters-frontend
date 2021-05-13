import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  
  display: flex;
  flex-direction: column;

  label {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--text-highlight);
  }

  textarea {
    height: 130px;
    border: 1px solid var(--text-highlight);
    border-radius: 7px;
    resize: none;
    padding: 1rem;
  }

  .error {
    margin-top: 0.5rem;
    color: var(--red)
  }
`;