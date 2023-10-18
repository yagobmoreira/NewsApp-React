import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import getImageURL from '../../utils/getImageURL';
import {
  HeroContainer,
  MainHero,
  SecondaryHero,
} from './styles';

function NewHero() {
  const { breakingNews } = useContext(NewsContext);
  const BASE_IMAGE_URL = 'https://agenciadenoticias.ibge.gov.br/';

  return (
    <HeroContainer data-testid="heroContainer">
      {breakingNews && (
        <MainHero
          data-testid="mainHero"
          href={ breakingNews[0]?.link }
          target="_blank"
        >
          <img
            src={ `${BASE_IMAGE_URL}${getImageURL(breakingNews[0])}` }
            alt="Main news"
          />
          <h3>{breakingNews[0]?.titulo}</h3>
          <span>{breakingNews[0]?.introducao}</span>
        </MainHero>
      )}
      {breakingNews && (
        <SecondaryHero data-testid="secondaryHero">
          <a
            href={ breakingNews[1]?.link }
            target="_blank"
            className="secondaryContent"
            rel="noreferrer"
          >
            <img
              src={ `${BASE_IMAGE_URL}${getImageURL(breakingNews[1])}` }
              alt="Secondary news"
            />
            <h3>{breakingNews[1]?.titulo}</h3>
            <span>{breakingNews[1]?.introducao}</span>
          </a>
          <a
            href={ breakingNews[2]?.link }
            target="_blank"
            className="secondaryContent"
            rel="noreferrer"
          >
            <img
              src={ `${BASE_IMAGE_URL}${getImageURL(breakingNews[2])}` }
              alt="Secondary news"
            />
            <h3>{breakingNews[2]?.titulo}</h3>
            <span>{breakingNews[2]?.introducao}</span>
          </a>
        </SecondaryHero>
      )}
    </HeroContainer>
  );
}

export default NewHero;
