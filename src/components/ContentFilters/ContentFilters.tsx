import { useSelector, useDispatch } from 'react-redux';
import Favorites from '../Favorites/Favorites';
import Content from '../Content/Content';
import useContentFilters from '../../hooks/useContentFilters';
import { Dispatch, GlobalStateType } from '../../utils/types';
import { requestQuantityNews, requestToggleOrientation } from '../../redux/actions';
import toggleOrientation from '../../assets/toggleOrientation.svg';
import {
  SectionContainer,
  ContentFiltersContainer,
  ContentContainer,
  Container,
  Button,
} from './styles';

function ContentFilters() {
  const globalState = useSelector((state: GlobalStateType) => state.news);
  const dispatch: Dispatch = useDispatch();
  const { content, activeButton, quantity, toggleOrientationType } = globalState;

  const { handleContent } = useContentFilters();
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
          onClick={ () => dispatch(requestToggleOrientation(!toggleOrientationType)) }
        >
          <img src={ toggleOrientation } alt="" />
        </button>
      </Container>
      <ContentContainer>
        {content ? <Content /> : <Favorites />}
      </ContentContainer>
      {activeButton !== 'favoritos'
      && (
        <Button
          onClick={ () => dispatch(requestQuantityNews(quantity + 6)) }
        >
          Mais notícias
        </Button>
      )}
    </SectionContainer>
  );
}

export default ContentFilters;
