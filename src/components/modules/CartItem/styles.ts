import styled from 'styled-components';

export const Container = styled.div`
      margin: 10px 0;
      border: 1px solid var(--black);
      border-radius: 7px;
      padding: 1rem;
    
      display: flex;
      align-items: center;
      
      .thumbnail {
        img {
          height: 70px;
        }
      }

      .context {
        width: 100%;
        margin-left: 10px;
        
        .informations {
          display: flex;
          justify-content: space-between;
          font-weight: bold;

          p {
            color: var(--red);
            font-size: 1rem;
            text-transform: uppercase;
          }

          .remove-item {

            a {
              svg {
                color: var(--red);
                height: 20px;
              }
            }
          }
        }

        .amount {
          margin-top: 0.6rem;
          color: var(--black);
        
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          
          input {
            width: 60px;
            height: 2.5rem;
            border: 1px solid var(--red);
            padding: 0 1rem;
            border-radius: 4px;
          }
        }
      }

`;