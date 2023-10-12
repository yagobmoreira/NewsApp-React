import { useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsContext from '../../context/NewsContext';
import filterNews from '../../utils/filterNews';

function Content() {
  const { news, filter } = useContext(NewsContext);
  const filteredNews = filterNews(news, filter);

  return (
    <div>
      {filteredNews && filteredNews.slice(3, 10).map((item) => (
        <NewsCard
          key={ item.id }
          title={ item.titulo }
          introduction={ item.introducao }
          date={ item.data_publicacao }
          link={ item.link }
        />
      ))}

    </div>
  );
}

export default Content;
