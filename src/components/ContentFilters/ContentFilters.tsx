import { useDispatch } from 'react-redux';
import Favorites from '../Favorites/Favorites';
import Content from '../Content/Content';
import { Dispatch } from '../../utils/types';
import { setQuantityNews, setToggleOrientation, changeFilter } from '../../redux/actions';
import useSelectFromStore from '../../hooks/useSelectFromStore';
import toggleOrientation from '../../assets/toggleOrientation.svg';
import {
  SectionContainer,
  ContentFiltersContainer,
  ContentContainer,
  Container,
  Button,
} from './styles';

function ContentFilters() {
  const { selectState } = useSelectFromStore();
  const dispatch: Dispatch = useDispatch();
  const content = selectState('content') as boolean;
  const activeButton = selectState('activeButton') as string;
  const quantity = selectState('quantity') as number;
  const toggleOrientationType = selectState('toggleOrientationType') as boolean;

  return (
    <SectionContainer>
      <Container>
        <ContentFiltersContainer>
          <button
            className={ activeButton === 'maisRecentes' ? 'active' : '' }
            onClick={ (e) => dispatch(changeFilter(e)) }
            value="maisRecentes"
          >
            Mais recentes
          </button>
          <button
            className={ activeButton === 'Release' ? 'active' : '' }
            onClick={ (e) => dispatch(changeFilter(e)) }
            value="Release"
          >
            Releases
          </button>
          <button
            className={ activeButton === 'Notícia' ? 'active' : '' }
            onClick={ (e) => dispatch(changeFilter(e)) }
            value="Notícia"
          >
            Notícias
          </button>
          <button
            className={ activeButton === 'favoritos' ? 'active' : '' }
            onClick={ (e) => dispatch(changeFilter(e)) }
            value="favoritos"
          >
            Favoritos
          </button>
        </ContentFiltersContainer>
        <button
          className="toggleOrientationBtn"
          onClick={ () => dispatch(setToggleOrientation(!toggleOrientationType)) }
        >
          <img src={ toggleOrientation } alt="toggleOrientation" />
        </button>
      </Container>
      <ContentContainer>
        {content ? <Content /> : <Favorites />}
      </ContentContainer>
      {activeButton !== 'favoritos'
      && (
        <Button
          onClick={ () => dispatch(setQuantityNews(quantity + 6)) }
        >
          Mais notícias
        </Button>
      )}
    </SectionContainer>
  );
}

export default ContentFilters;
