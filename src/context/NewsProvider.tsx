import { useState, useEffect } from 'react';
import NewsContext from './NewsContext';
import { News, Item } from '../utils/types';
import fetchApi from '../utils/fetchApi';

type ProviderType = {
  children: React.ReactNode;
};

function NewsProvider({ children }: ProviderType) {
  const [news, setNews] = useState<News>({} as News);
  const [breakingNews, setBreakingNews] = useState<Item[]>([]);
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchApi(url);
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
  };

  return (
    <NewsContext.Provider value={ contextValue }>
      { children }
    </NewsContext.Provider>
  );
}

export default NewsProvider;
