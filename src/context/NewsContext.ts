import { createContext } from 'react';
import { News, Item } from '../utils/types';

type NewsContextType = {
  news: News;
  breakingNews: Item[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  quantityNews: number;
  setQuantityNews: React.Dispatch<React.SetStateAction<number>>;
};

const NewsContext = createContext({} as NewsContextType);
export default NewsContext;
