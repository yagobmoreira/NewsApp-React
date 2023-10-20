import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Item } from '../../utils/types';
import { getImageURL } from '../../utils';
import { FavoriteSection } from './styles';
import { BASE_IMAGE_URL } from '../NewHero/NewHero';

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
            imgSrc={ `${BASE_IMAGE_URL}${getImageURL(item)}` }
          />
        )))}
    </FavoriteSection>
  );
}

export default Favorites;
