import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NewsContext from '../../context/NewsContext';
import getImageURL from '../../utils/getImageURL';
import { SectionContainer } from './styles';

function Hero() {
  const { breakingNews } = useContext(NewsContext);
  const BASE_IMAGE_URL = 'https://agenciadenoticias.ibge.gov.br/';
  return (
    <SectionContainer>
      <Carousel style={ { width: '70%' } }>
        {breakingNews && (breakingNews.slice(0, 3).map((news) => (
          <Carousel.Item key={ news.id } interval={ 5000 }>
            <img src={ `${BASE_IMAGE_URL}${getImageURL(news)}` } alt="" />
            <Carousel.Caption>
              <h3>{news.titulo}</h3>
              <p>{news.introducao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )))}
      </Carousel>
    </SectionContainer>
  );
}

export default Hero;
