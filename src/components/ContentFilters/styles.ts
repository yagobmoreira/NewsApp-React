import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;
  width: 80%;

  @media screen {
    @media (max-width: 1000px) {
      width: 90%;
      height: auto;
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(1rem);
  display: flex;
  flex-flow: row nowrap;
  height: 4rem;
  justify-content: space-between;
  width: 100%;

  .toggleOrientationBtn {
    background: none;
    border: none;
    margin-right: 1rem;

    @media screen {
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
`;

export const ContentFiltersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  width: 500px;
  
  button {
    border: none;
    background: none;
    color: #2a2a2a;
    cursor: pointer;
    font-family: 'Gabarito';
    font-size: 1.125rem;

    @media screen {
      @media (max-width: 1000px) {
        font-size: 1rem;
      }
    }
  }

  .active {
    border-bottom: 3px solid #cf813c;
    color: #cf813c;
    font-weight: 700;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  background: none;
  border-radius: 2px;
  border: 2px solid #cf813c;
  color: #cf813c;
  text-align: center;
  font-family: Gabarito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 1.6px;
  margin: 2rem 0;
  opacity: 0.5;
  padding: 1rem;
  text-transform: uppercase;
`;
