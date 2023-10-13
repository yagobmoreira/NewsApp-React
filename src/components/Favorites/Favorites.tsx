import NewsCard from '../NewsCard/NewsCard';
import { Item } from '../../utils/types';
import { FavoriteSection } from './styles';

function Favorites() {
  const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
  return (
    <FavoriteSection>
      {favoriteNews.length === 0
        ? (<h1>Sem favoritos</h1>) : (favoriteNews.map((item: Item) => (
          <NewsCard
            key={ item.id }
            item={ item }
          />
        )))}
    </FavoriteSection>
  );
}

export default Favorites;
