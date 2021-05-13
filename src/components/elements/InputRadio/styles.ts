import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    
    & > label {
      text-transform: uppercase;
      font-weight: bold;
      color: var(--text-highlight);
    }
    
    .options {
      margin-top: 5px;
      display: flex;
      
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        label {
          padding: 0 0.5rem;
          color: var(--text-highlight);
        }
      }
    }
`;