import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Item } from '../../utils/types';
import { FavoriteSection } from './styles';

function Favorites() {
  const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
  const [favoriteItems, setFavoriteItems] = useState(favoriteNews);

  // Função para remover um item favorito
  const removeFromFavorites = (itemToRemove: Item) => {
    const newFavoriteItems = favoriteItems
      .filter((item: Item) => item.id !== itemToRemove.id);
    localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteItems));
    setFavoriteItems(newFavoriteItems);
  };

  return (
    <FavoriteSection favoritesLength={ favoriteNews?.length }>
      {favoriteNews.length === 0
        ? (<h1>Sem notícias favoritas !</h1>) : (favoriteNews.map((item: Item) => (
          <NewsCard
            key={ item.id }
            item={ item }
            renderFavorite={ removeFromFavorites }
          />
        )))}
    </FavoriteSection>
  );
}

export default Favorites;
