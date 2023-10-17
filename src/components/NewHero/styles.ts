import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  height: 485px;
  justify-content: space-between;
  margin: 8rem auto 2rem auto;
  width: 80%;

  @media screen {
    @media (max-width: 1000px) {
      flex-flow: column nowrap;
      gap: 1rem;
      height: auto;
      margin: 6rem auto;
      width: 100%;
    }
  }

`;

export const MainHero = styled.a`
  cursor: pointer;
  position: relative;
  width: 55%;

  h3 {
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    font-family: Gabarito;
    font-weight: 900;
    line-height: 3rem;
    padding: 0 2rem;
    position: absolute;
    text-shadow: 1px 1px 6px #000;
    top: 60%;

    @media screen {
      @media (max-width: 1000px) {
        color: #000;
        font-size: 3.5vmax;
        line-height: 4vmax;
        padding: 0 1rem;
        text-shadow: none;
        position: static;
      }
    }
  }

  span {
    display: none;
    
    @media screen {
      @media (max-width: 1000px) {
        color: rgba(0, 0, 0, 0.5);
        font-size: 1rem;
        line-height: 1rem;
        padding: 0 1rem;
        display: block;
      }
    }
    
  }

  img {
    border-radius: 0.5rem;
    height: 485px;
    width: 100%;

    @media screen {
      @media (max-width: 1000px) {
      display: none;
      }
    }
  }

  @media screen {
    @media (max-width: 1000px) {
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: 250px;
      margin: 0 auto;
      text-decoration: none;
      width: 90%;
    }
  }

`;

export const SecondaryHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43%;
  
  img {
    border-radius: 0.5rem;
    cursor: pointer;
    height: 235px;
    width: 100%;

    @media screen {
      @media (max-width: 1000px) {
      display: none;
      }
    }
  }
  
  .secondaryContent {
    position: relative;
    
    h3 {
      color: #fff;
      cursor: pointer;
      font-size: 1.2rem;
      font-family: Gabarito;
      font-weight: 700;
      line-height: 1.5rem;
      padding: 0 2rem;
      position: absolute;
      text-shadow: 1px 1px 6px #000;
      top: 60%;

      @media screen {
        @media (max-width: 1000px) {
          color: #000;
          font-size: 3.5vmax;
          line-height: 4vmax;
          padding: 0 1rem;
          text-shadow: none;
          position: static;
        }
      }
    }

    span {
      display: none;
      
      @media screen {
        @media (max-width: 1000px) {
          color: rgba(0, 0, 0, 0.5);
          font-size: 1rem;
          line-height: 1rem;
          padding: 0 1rem;
          display: block;
        }
      }
    
    }

    @media screen {
      @media (max-width: 1000px) {
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        height: 250px;
        margin: 0 auto;
        text-decoration: none;
        width: 90%;
      }
    }
  }

  @media screen {
    @media (max-width: 1000px) {
      flex-flow: column nowrap;
      gap: 1rem;
      height: auto;
      width: 100%;
    }
  }
`;
