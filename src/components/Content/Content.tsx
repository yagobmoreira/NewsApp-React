import { useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsContext from '../../context/NewsContext';
import filterNews from '../../utils/filterNews';
import { ContentSection } from './styles';

function Content() {
  const { news, filter, quantityNews } = useContext(NewsContext);
  const filteredNews = filterNews(news, filter);
  return (
    <ContentSection>
      {filteredNews && filteredNews
        .slice(3, quantityNews).map((item) => (
          <NewsCard
            key={ item.id }
            item={ item }
          />
        ))}
    </ContentSection>
  );
}

export default Content;
