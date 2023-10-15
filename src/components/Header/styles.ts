import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: rgba(14, 14, 14, 1);
  box-shadow: 0rem 0.25rem 1.75rem rgba(0, 0, 0, 0.25);
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

  h1 {
    margin: 0;
  }

  img {
    position: absolute;
    height: 4rem;
    left:0;
  }
`;
