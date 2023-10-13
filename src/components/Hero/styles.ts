import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
  
  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    font-style: normal;
    color: rgba(12,12,13,1);
  }

  p {
    text-decoration: wavy;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(12,12,13,0.5);
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
    opacity: 0.5;
  }
`;
