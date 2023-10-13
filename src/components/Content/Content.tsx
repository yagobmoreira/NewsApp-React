import { useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsContext from '../../context/NewsContext';
import filterNews from '../../utils/filterNews';
import { ContentSection } from './styles';

function Content() {
  const { news, filter } = useContext(NewsContext);
  const filteredNews = filterNews(news, filter);

  return (
    <ContentSection>
      {filteredNews && filteredNews.slice(3, 12).map((item) => (
        <NewsCard
          key={ item.id }
          title={ item.titulo }
          introduction={ item.introducao }
          date={ item.data_publicacao }
          link={ item.link }
        />
      ))}
    </ContentSection>
  );
}

export default Content;
