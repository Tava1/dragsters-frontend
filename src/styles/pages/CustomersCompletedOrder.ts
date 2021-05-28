import styled from 'styled-components';

export const Title = styled.div`
  & > h2 {
    margin: 20px 1rem;
    color: var(--red);

    @media (min-width: 768px) { 
      margin: 20px 3rem;
    } 

    @media (min-width: 960px) { 
      width: 900px;
      margin: 20px auto;
    } 
  }
`;

export const Container = styled.section`
  margin: 1rem;
  margin-bottom: 80vh;

  @media (min-width: 960px) { 
    width: 900px;
    margin: 0 auto;
    margin-bottom: 80vh;
  }

  .card {
    border-radius: 4px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0,0.10);
    padding: 1rem;

    @media (min-width: 768px) { 
      display: flex;
      justify-content: space-between;
    }

    .context {
      margin-bottom: 1rem;

      h2 {
        margin-bottom: 0.5rem;
        color: var(--red);
      }
    }

    .order-number {
      h2 {
        margin-bottom: 0.5rem;
        color: var(--red);
      }
    }
  }

`;

