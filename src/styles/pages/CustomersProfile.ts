import styled from 'styled-components';

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
      height: 100px;
      width: 100%;
      background: var(--white);
      box-shadow: 0px 5px 5px rgba(0, 0, 0,0.10);
      transition: background 0.2s;

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
        height: 100%;
        background-color: transparent;
        padding: 1rem;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-right: 1rem;

          svg {
            color: var(--red);
          }
        }

        .context {
          h2 {
            color: var(--text-highlight);
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;