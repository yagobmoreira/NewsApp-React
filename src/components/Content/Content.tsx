import { useSelector } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import { filterNews, getImageURL } from '../../utils';
import { ContentSection } from './styles';
import { GlobalStateType } from '../../utils/types';
import { BASE_IMAGE_URL } from '../NewHero/NewHero';

function Content() {
  const globalState = useSelector((state: GlobalStateType) => state.news);
  const { news, filter, quantity } = globalState;

  const filteredNews = filterNews(news, filter);
  return (
    <ContentSection>
      {filteredNews && filteredNews
        .slice(3, quantity).map((item) => (
          <NewsCard
            key={ item.id }
            item={ item }
            filter={ filter }
            imgSrc={ `${BASE_IMAGE_URL}${getImageURL(item)}` }
          />
        ))}
    </ContentSection>
  );
}

export default Content;
