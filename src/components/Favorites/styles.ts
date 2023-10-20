import styled from 'styled-components';

type FavoriteSectionProps = {
  favoritesLength: number;
};

export const FavoriteSection = styled.section<FavoriteSectionProps>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ favoritesLength }) => (favoritesLength >= 3
    ? 'space-between' : 'space-evenly')};
  margin: 0 auto;
  min-height: 60vh;
  width: 100%;
  
  div {
    width: 100%;
  }

  h1 {
    font-family: Gabarito;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
`;
