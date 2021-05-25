import styled from 'styled-components';
import { shade } from 'polished'

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

      .cart {
        margin-left: 1rem;
        position: relative;

          a {
            svg {
              color: var(--red);
              transition: color 0.2s;
            }

            .count {
              background: var(--red);
              padding: 2px 4px;
              border-radius: 10px; 
              display: inline;
              border: 2px solid var(--white);

              position: absolute;
              right: -10px;
              top: -8px;

              display: flex;
              transition: transform 0.2s;

              span {
                color: var(--white);
                font-weight: bold;
                font-size: 0.8rem;
              }
            }
          }

          &:hover {
            svg {
              color: ${shade(0.25, 'red')};
            }

            .count {
              transform: scale(1.2);
              background: ${shade(0.25, 'red')};
            }
          }
        }
    }
  }
`;