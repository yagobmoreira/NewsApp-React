import { News } from './types';

const filterNews = (news: News, filter: string) => {
  if (filter === 'Release' || filter === 'Notícia') {
    return news.items?.filter((item) => item.tipo === filter);
  }
  return news?.items;
};

export default filterNews;
