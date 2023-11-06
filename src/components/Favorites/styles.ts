import styled from 'styled-components';

type FavoriteSectionProps = {
  favoritesLength: number;
};

export const FavoriteSection = styled.section<FavoriteSectionProps>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ favoritesLength }) => (Number.isInteger(favoritesLength / 3)
    ? 'space-between' : 'flex-start')};
  column-gap: 2.4rem;
  margin: 2rem auto;
  min-height: ${({ favoritesLength }) => { if (favoritesLength === 0) return '10rem'; }};
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
