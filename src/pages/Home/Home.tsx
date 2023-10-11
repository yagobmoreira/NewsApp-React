import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import { MainContainer } from './styles';

function Home() {
  return (
    <MainContainer>
      <Header />
      <Nav />
      <Hero />
    </MainContainer>
  );
}

export default Home;
