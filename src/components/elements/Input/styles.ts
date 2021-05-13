import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  
  display: flex;
  animation: linear;
  
  flex-direction: column;
  
  label {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--text-highlight);
  }
  
  input {
    height: 2.3rem;
    border: 1px solid var(--text-highlight);
    border-radius: 4px;
    padding: 0 1rem;
  }

  .error {
    margin-top: 0.5rem;
    color: var(--red)
  }
`;
