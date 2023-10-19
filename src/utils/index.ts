import { Item, News } from './types';

export const getImageURL = (item: Item) => {
  if (item) {
    const imageURL = Object.values(item)[8] as string;
    if (imageURL) {
      return JSON.parse(imageURL).image_fulltext;
    }
  }
};

export const calcDate = (dateAndHour: string) => {
  const date = dateAndHour.split(' ')[0];
  const hour = dateAndHour.split(' ')[1];
  const dateFormat = date.split('/').reverse().join('-');
  const newsDate = new Date(`${dateFormat}T${hour}-03:00`);
  const dateNow = new Date();

  const diffTime = Math.abs(dateNow.getTime() - newsDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const filterNews = (news: News, filter: string) => {
  if (filter === 'Release' || filter === 'Notícia') {
    return news.items?.filter((item) => item.tipo === filter);
  }
  return news?.items;
};
