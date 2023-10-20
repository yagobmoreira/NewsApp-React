import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #cf813c;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 6.25rem;
  padding: 1rem 5.5rem;

  button:first-of-type {
    border: none;
    background: none;
    font-family: 'Gabarito', serif;
    font-size: 1rem;
    padding: 0;
    text-align: left;
    width: 8rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  color: #fff;
  flex-flow: row wrap;
  font-family: 'Gabarito', serif;
  font-size: 1rem;
  justify-content: space-between;

  @media screen {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 80px;
  
  a {
    border: none;
    background: none;
    text-decoration: none;
    color: #fff;
    padding: 0;
  }
`;
