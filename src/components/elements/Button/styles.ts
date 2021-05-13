import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: none;
    width: 100%;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    background: var(--red);
    color: var(--white);
    font-weight: bold;
    transition: background 0.2s;
    
    &:hover {
      background: rgba(223, 48, 48, 0.863);
    }
  }
`;