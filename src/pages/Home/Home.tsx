import Header from '../../components/Header/Header';
import ContentFilters from '../../components/ContentFilters/ContentFilters';
import NewHero from '../../components/NewHero/NewHero';
import { MainContainer } from './styles';

function Home() {
  return (
    <MainContainer>
      <Header />
      <NewHero />
      <ContentFilters />
    </MainContainer>
  );
}

export default Home;
