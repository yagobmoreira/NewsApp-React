import { getImageURL } from '../../utils';
import { Item } from '../../utils/types';
import useSelectFromStore from '../../hooks/useSelectFromStore';
import {
  HeroContainer,
  MainHero,
  SecondaryHero,
} from './styles';

export const BASE_IMAGE_URL = 'https://agenciadenoticias.ibge.gov.br/';

function NewHero() {
  const { selectState } = useSelectFromStore();
  const breakingNewsData = selectState('breakingNews') as Item [];

  return (
    <HeroContainer data-testid="heroContainer">
      {breakingNewsData && (
        <MainHero
          data-testid="mainHero"
          href={ breakingNewsData[0]?.link }
          target="_blank"
        >
          <img
            src={ `${BASE_IMAGE_URL}${getImageURL(breakingNewsData[0])}` }
            alt="Main news"
          />
          <h3>{breakingNewsData[0]?.titulo}</h3>
          <span>{breakingNewsData[0]?.introducao}</span>
        </MainHero>
      )}
      {breakingNewsData && (
        <SecondaryHero data-testid="secondaryHero">
          <a
            href={ breakingNewsData[1]?.link }
            target="_blank"
            className="secondaryContent"
            rel="noreferrer"
          >
            <img
              src={ `${BASE_IMAGE_URL}${getImageURL(breakingNewsData[1])}` }
              alt="Secondary news"
            />
            <h3>{breakingNewsData[1]?.titulo}</h3>
            <span>{breakingNewsData[1]?.introducao}</span>
          </a>
          <a
            href={ breakingNewsData[2]?.link }
            target="_blank"
            className="secondaryContent"
            rel="noreferrer"
          >
            <img
              src={ `${BASE_IMAGE_URL}${getImageURL(breakingNewsData[2])}` }
              alt="Secondary news"
            />
            <h3>{breakingNewsData[2]?.titulo}</h3>
            <span>{breakingNewsData[2]?.introducao}</span>
          </a>
        </SecondaryHero>
      )}
    </HeroContainer>
  );
}

export default NewHero;
