import useHero from '../../hooks/useHero';
import getImageURL from '../../utils/getImageURL';
import { Item } from '../../utils/types';

function Hero() {
  const { featuredNews } = useHero();
  const renderHero = {} as Item;
  if (featuredNews) {
    Object.assign(renderHero, featuredNews);
  }
  const BASE_IMAGE_URL = 'https://agenciadenoticias.ibge.gov.br/';

  return (
    <section>
      <img src={ `${BASE_IMAGE_URL}${getImageURL(renderHero)}` } alt="" />
      <div>
        <span>Notícia mais recente</span>
        <h3>{featuredNews.titulo}</h3>
        <p>{featuredNews.introducao}</p>
      </div>
    </section>
  );
}

export default Hero;
