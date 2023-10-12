import { createContext } from 'react';
import { News, Item } from '../utils/types';

type NewsContextType = {
  news: News;
  breakingNews: Item[];
};

const NewsContext = createContext({} as NewsContextType);
export default NewsContext;
