import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  background-color: var(--white);
  box-shadow: 0px 5px 5px rgb(0, 0, 0,0.10);

  .navigation-bar {
    height: 100%;
    margin: 0 auto;
    width: 992px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .logo {
      color: var(--red);
    }
    
    nav {
      display: flex;
      
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        
        li {
          margin-left: 1rem;
        } 
      }
      
      .sign-in-sign-out {
        margin-left: 2.3rem;
        font-weight: bold;
        
        a + a {
          margin-left: 1rem;
          padding: 0.7rem 1rem;
          border-radius: 7px;
          background: var(--red);
          color: var(--white);
        }
      }

      .dropdown {
        margin-left: 2.3rem;
        position: relative;

        svg {
          color: var(--red);
        }
        
        &:hover {
          .dropdown-list {
            display: block;
          }
        }

        .dropdown-list {
          display: none;
          background: var(--white);
          width: 140px;

          z-index: 100;
          
          position: absolute;

          &:hover {
            display: block;
          }

          & > div {
            border-radius: 4px;
            border: 1px solid var(--text);
            
            a {
              padding: 0.5rem;
              background: var(--white);
              color: var(--red);
              border-bottom: 1px solid var(--text);
              cursor: pointer;

              &:hover {
                background: var(--red);
                color: var(--white);
              }
            }

            button {
              cursor: pointer;
              padding: 0.5rem;
              text-align: left;
              border: none;
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
              background: var(--white);
              color: var(--red);
              
              &:hover {
                background: var(--red);
                color: var(--white);
              }
            }

            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;