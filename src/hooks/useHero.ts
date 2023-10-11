import { useContext, useState, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import { Item } from '../utils/types';

const useHero = () => {
  const { news } = useContext(NewsContext);
  const [featuredNews, setFeaturedNews] = useState<Item>({} as Item);
  const haveFeatured = news
    .items?.some((item) => item.destaque === true && item.tipo === 'Notícia');
  useEffect(() => {
    if (news && haveFeatured) {
      const featured = news
        .items.find((item) => item.destaque === true && item.tipo === 'Notícia');
      setFeaturedNews(featured as Item);
    }
  }, [haveFeatured, news]);

  return {
    featuredNews,
  };
};

export default useHero;
