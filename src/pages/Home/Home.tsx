import Header from '../../components/Header/Header';
import ContentFilters from '../../components/ContentFilters/ContentFilters';
import NewHero from '../../components/NewHero/NewHero';
import { MainContainer } from './styles';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <MainContainer>
      <Header />
      <NewHero />
      <ContentFilters />
      <Footer />
    </MainContainer>
  );
}

export default Home;
