import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #cf813c;
  box-shadow: 0rem 0.25rem 1rem #cf813c;
  color: white;
  display: flex;
  font-family: Gabarito;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  height: 4rem;
  margin-bottom: 2rem;
  /* padding: 2rem 0%; */
  position: fixed;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;

  button {
    background-color: #cf813c;
    border: none;
    height: 100%;
  }

  button > img {
    background-color: #cf813c;
    height: 100%;
  }
`;
