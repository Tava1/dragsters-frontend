import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  margin: 3rem 1rem;

  @media (min-width: 960px) { 
    margin: 3rem auto;
    width: 992px;
  }

  h1 {
    color: var(--red);
    margin-bottom: 3rem;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;

    .menu-item {
      border-radius: 4px;
      grid-column: span 12;
      height: 300px;
      width: 100%;
      background: var(--white);
      box-shadow: 0px 5px 5px rgba(0, 0, 0,0.10);
      transition: background 0.2s;
      padding: 1rem;

      &:hover {
        background: rgba(0, 0, 0,0.10);
      }


      @media (min-width: 768px) { 
        grid-column: span 6;
      }

      @media (min-width: 960px) { 
        grid-column: span 4;
      }
      
      a {
        width: 100%;
        height: 80%;

        background-color: transparent;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .default-address {
          height: 20px;
          margin-bottom: 1rem;
          
          display: flex;
          align-self: center;
          justify-content: center;
          color: var(--red);
          
          span {
            font-size: 0.8rem;
          }
          svg {
            margin-left: 0.2rem;
          }
        }

        .context {
          h2 {
            font-size: 1.2rem;
            color: var(--text-highlight);
            margin-bottom: 5px;

          }
        }
      }

      .actions {
        height: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        
        
        & > div {
          color: var(--red);
          
          & + div {
            margin-left: 1rem;
          }

          svg {
            margin-right: 0.2rem;
          }
        }
      }
    }

    .menu-item-new {
      border-radius: 4px;
      grid-column: span 12;
      height: 100px;
      width: 100%;
      background: var(--red);
      box-shadow: 0px 5px 5px rgba(0, 0, 0,0.10);
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, 'red')};
      }

      @media (min-width: 768px) { 
        grid-column: span 6;
        height: 300px;
      }

      @media (min-width: 960px) { 
        grid-column: span 4;
        height: 300px;
      }
      
      a {
        width: 100%;
        height: 100%;
        background-color: transparent;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .context {
          color: var(--white);
          font-weight: bold;
          font-size: 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          svg {
            margin: 0.5rem;
          }
        }
      }
    }
  }
`;