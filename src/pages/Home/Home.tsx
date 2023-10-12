import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import FiltersNav from '../../components/FiltersNav/FiltersNav';
import { MainContainer } from './styles';

function Home() {
  return (
    <MainContainer>
      <Header />
      <Nav />
      <Hero />
      <FiltersNav />
    </MainContainer>
  );
}

export default Home;
