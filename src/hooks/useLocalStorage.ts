import { useState } from 'react';
import { Item } from '../utils/types';

const useLocalStorage = (item: Item) => {
  const { titulo } = item;
  const [isFavorite, setIsFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favoriteNews') || '[]')
      .some((news: Item) => news.titulo === titulo),
  );

  const setAndRemoveFromLocalStorage = () => {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    if (isFavorite) {
      const newFavoriteNews = favoriteNews.filter((news: Item) => news.titulo !== titulo);
      localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favoriteNews', JSON.stringify([...favoriteNews, item]));
      setIsFavorite(true);
    }
  };

  return {
    isFavorite,
    setAndRemoveFromLocalStorage,
  };
};

export default useLocalStorage;
