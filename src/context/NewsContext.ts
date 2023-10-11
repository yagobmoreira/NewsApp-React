import { createContext } from 'react';
import { News } from '../utils/types';

type NewsContextType = {
  news: News;
};

const NewsContext = createContext({} as NewsContextType);
export default NewsContext;
