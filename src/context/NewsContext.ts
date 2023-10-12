import { createContext } from 'react';
import { News, Item } from '../utils/types';

type NewsContextType = {
  news: News;
  breakingNews: Item[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const NewsContext = createContext({} as NewsContextType);
export default NewsContext;
