import styled from 'styled-components';

export const ContentSection = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;
