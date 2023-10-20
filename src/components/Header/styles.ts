import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #cf813c;
  border-bottom: 5px solid #dc8032;
  box-shadow: 0rem 0.25rem 1rem #cf813c;
  color: white;
  display: flex;
  justify-content: center;
  height: 4rem;
  margin-bottom: 2rem;
  /* padding: 2rem 0%; */
  position: fixed;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;

  h1 {
    color: #fff;
    font-family: 'Gabarito', serif;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    text-shadow: 1px 1px 3px #2d2a27;
  }

  button {
    background-color: #cf813c;
    border: none;
    height: 100%;
  }
`;
