import { useContext } from 'react';
import Favorites from '../Favorites/Favorites';
import Content from '../Content/Content';
import useContentFilters from '../../hooks/useContentFilters';
import NewsContext from '../../context/NewsContext';
import toggleOrientation from '../../assets/toggleOrientation.svg';
import {
  SectionContainer,
  ContentFiltersContainer,
  ContentContainer,
  Container,
  Button,
} from './styles';

function ContentFilters() {
  const { content, handleContent, activeButton } = useContentFilters();
  const { setQuantityNews, setToggleOrientation } = useContext(NewsContext);
  return (
    <SectionContainer>
      <Container>
        <ContentFiltersContainer>
          <button
            className={ activeButton === 'maisRecentes' ? 'active' : '' }
            onClick={ (e) => handleContent(e) }
            value="maisRecentes"
          >
            Mais recentes
          </button>
          <button
            className={ activeButton === 'Release' ? 'active' : '' }
            onClick={ (e) => handleContent(e) }
            value="Release"
          >
            Releases
          </button>
          <button
            className={ activeButton === 'Notícia' ? 'active' : '' }
            onClick={ (e) => handleContent(e) }
            value="Notícia"
          >
            Notícias
          </button>
          <button
            className={ activeButton === 'favoritos' ? 'active' : '' }
            onClick={ (e) => handleContent(e) }
            value="favoritos"
          >
            Favoritos
          </button>
        </ContentFiltersContainer>
        <button
          className="toggleOrientationBtn"
          onClick={ () => setToggleOrientation((prevToggle) => !prevToggle) }
        >
          <img src={ toggleOrientation } alt="" />
        </button>
      </Container>
      <ContentContainer>
        {content ? <Content /> : <Favorites />}
      </ContentContainer>
      {activeButton !== 'favoritos'
      && (
        <Button onClick={ () => setQuantityNews((prevQuant) => prevQuant + 6) }>
          Mais notíciais
        </Button>
      )}
    </SectionContainer>
  );
}

export default ContentFilters;
