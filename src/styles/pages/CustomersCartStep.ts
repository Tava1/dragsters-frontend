import styled from 'styled-components';

export const Title = styled.div`
  & > h2 {
    margin: 20px 1rem;
    color: var(--red);

    @media (min-width: 768px) { 
      margin: 20px 3rem;
    }  
  }
`;

export const Grid = styled.div`
  @media (min-width: 768px) { 
    margin: 0 2rem;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 
    "cart cart summary summary"
    "shipping shipping . .";
  }
`;

export const Cart = styled.section`
  margin: 1rem;

  .products {
    margin: 1rem 0;
  }

  @media (min-width: 768px) { 
    grid-area: cart;
  }
  
`;

export const Shipping = styled.section`
  margin: 1rem;

  label {
    font-weight: bold;
    color: var(--red);
  }

  .shipping-input {
    display: flex;
    align-items: center;
    
    input {
      height: 3rem;
      border: 1px solid var(--red);
      padding: 0 1rem;
      width: 100%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      &::placeholder {
        font-weight: bold;
        color: var(--text);
      }
    }

    button {
      height: 3rem;
      border: 1px solid var(--red);
      background: var(--red);
      padding: 0 1rem;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      svg {
        color: var(--white);
      }
    }
  }

  .shipping-result {
    margin-top: 5px;
    border: 1px solid var(--red);
    padding: 1rem;
    border-radius: 4px;

    & > h3 {
      color: var(--black);
    }

    .options {
      margin: 10px 0 0 10px;
      
      div {
        margin: 10px 0;
        color: var(--black);
      }
    }
  }

  @media (min-width: 768px) { 
    grid-area: shipping;
  }
`;

export const Summary = styled.section`
  color: var(--black);

  & > h2 {
    margin: 1rem;
    color: var(--red);
  }

  & > .line {
    border-bottom: 1px solid var(--red);
  }
  
  .subtotal {
    position: relative;
    margin: 1rem;

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
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
  
  .btn {
    width: 100%;

    display: flex;
    justify-content: center;
    
    button {
      border: none;
      width: calc(100% - 2rem);
      height: 3rem;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      background: var(--red);
      color: var(--white);
      font-weight: bold;
      transition: background 0.2s;
      margin: 45px 0;

      &:hover {
        background: rgba(223, 48, 48, 0.863);
      }
    }
  }

  @media (min-width: 768px) { 
    grid-area: summary;
    color: var(--black);
  }
`;