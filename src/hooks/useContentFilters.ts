import { useContext, useState } from 'react';
import NewsContext from '../context/NewsContext';

const useContentFilters = () => {
  const [content, setContent] = useState<boolean>(true);
  const [activeButton, setActiveButton] = useState('maisRecentes');
  const { setFilter, setQuantityNews } = useContext(NewsContext);

  const handleContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    setActiveButton(value);
    setQuantityNews(12);
    if (value === 'favoritos') {
      setFilter(value);
      setContent(false);
    } else {
      setFilter(value);
      setContent(true);
    }
  };

  return { content, handleContent, activeButton };
};

export default useContentFilters;
