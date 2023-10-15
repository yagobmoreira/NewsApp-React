import Header from '../../components/Header/Header';
// import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
// import FiltersNav from '../../components/FiltersNav/FiltersNav';
import ContentFilters from '../../components/ContentFilters/ContentFilters';
import { MainContainer } from './styles';

function Home() {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <ContentFilters />
    </MainContainer>
  );
}

export default Home;
