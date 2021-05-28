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

  .orders {
    .orders-item {
      border-radius: 4px;
      grid-column: span 12;
      height: 100px;
      width: 100%;
      background: var(--white);
      box-shadow: 0px 5px 5px rgba(0, 0, 0,0.10);
      transition: background 0.2s;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      margin: 1rem 0;

      span + span {
        color: var(--text-highlight);
      }

      .detail {
        svg {
          color: var(--red);
        }
      }

      &:hover {
        background: rgba(0, 0, 0,0.10);
      }


      @media (min-width: 768px) { 
        grid-column: span 6;
      }

      @media (min-width: 960px) { 
        grid-column: span 4;
      }
      
    }
  }
`;