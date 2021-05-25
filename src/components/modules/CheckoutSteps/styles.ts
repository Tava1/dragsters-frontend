import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;

  .conatiner-checkout-steps {
    margin: 1rem;
    color: var(--red);
    font-size: 0.9rem;
    max-width: 600px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 576px) { 
      margin: 3rem auto;
    }
    
    .next {
      opacity: 0.4;
    }
  }

`;