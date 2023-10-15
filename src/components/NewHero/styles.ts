import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  height: 485px;
  justify-content: space-between;
  margin: 8rem auto 2rem auto;
  width: 80%;

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
  }

  img {
    border-radius: 0.5rem;
    height: 485px;
    width: 100%;
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
  }
  
  .secondaryContent {
    position: relative;
    
    h3 {
      color: #fff;
      cursor: pointer;
      font-size: 1.5;
      font-family: Gabarito;
      font-weight: 700;
      line-height: 1.5rem;
      padding: 0 2rem;
      position: absolute;
      text-shadow: 1px 1px 6px #000;
      top: 60%;
    }
  }
`;
