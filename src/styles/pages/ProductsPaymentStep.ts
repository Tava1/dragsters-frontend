import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.div`
  & > h2 {
    margin: 20px 1rem;
    color: var(--red);

    @media (min-width: 768px) { 
      margin: 20px 3rem;
    }  

    @media (min-width: 960px) { 
      width: 900px;
      margin: 0 auto;
    }
  }
`;

export const Container = styled.section`
  
  .payment-options {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 6px;
    margin: 2rem 1rem;

    @media (min-width: 960px) { 
      width: 350px;
      margin: 3rem auto;
    }

    .item {
      width: 100%;
      height: 65px;
      grid-column: span 6;
      background: var(--red);
      color: var(--white);
      border-radius: 4px;
      transition: background 0.2s;
      
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &:hover {
        background: ${shade(0.2, 'red')};
      }

      svg {
        margin-bottom: 5px;
      }
    }
  }

  .payment-selected-option {
    margin: 1rem;
      
    @media (min-width: 960px) { 
      width: 600px;
      margin: 1rem auto;
    }

    .ticket-option {
      margin-bottom: 200px;
      .context {
        & > div {
          display: flex;
          align-items: center;
          margin: 1rem 0;

          svg { 
            color: var(--red);
            margin-right: 1rem;
          }
          p {
            width: 90%;
            color: var(--red);
          }
        }
      }

      .total {
        margin: 2rem 0;
        color: var(--text-highlight);
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        span {
          font-weight: bold;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const Summary = styled.section`
  margin: 1rem;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;


  color: var(--black);
  
  @media (min-width: 960px) { 
    width: 900px;
    margin: 1rem auto;
  }

  & > h2 {
    margin: 1rem;
    color: var(--red);
  }

  .delivery-address {
    grid-column: span 12;
   
    @media (min-width: 960px) { 
      border-right: var(--red) solid 1px;
      grid-column: span 6;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  .context {
    grid-column: span 12;

    .subtotal {
      margin: 2rem 0;

      @media (min-width: 960px) { 
        margin: 0;
      }

      & > h3 {
        margin-bottom: 1rem;
      }

      div {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
      }
    }

    .total {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      
      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    @media (min-width: 960px) { 
      grid-column: span 6;
    }
  }

`;