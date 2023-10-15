import { useState, useEffect } from 'react';
import NewsContext from './NewsContext';
import { News, Item } from '../utils/types';
import fetchApi from '../utils/fetchApi';

type ProviderType = {
  children: React.ReactNode;
};
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

function NewsProvider({ children }: ProviderType) {
  const [news, setNews] = useState<News>({} as News);
  const [breakingNews, setBreakingNews] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [quantityNews, setQuantityNews] = useState<number>(12);
  const [toggleOrientation, setToggleOrientation] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchApi(BASE_URL);
      const brkNews = data.items
        .filter((item) => item.destaque === true && item.tipo === 'Notícia');
      setNews(data);
      setBreakingNews(brkNews);
    };
    fetchNews();
  }, []);

  const contextValue = {
    news,
    breakingNews,
    filter,
    setFilter,
    quantityNews,
    setQuantityNews,
    toggleOrientation,
    setToggleOrientation,
  };

  return (
    <NewsContext.Provider value={ contextValue }>
      { children }
    </NewsContext.Provider>
  );
}

export default NewsProvider;
