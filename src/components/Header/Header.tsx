import { HeaderContainer } from './styles';
import logoY2News from '../../assets/logoY2News.svg';

function Header() {
  const scrollPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <HeaderContainer data-testid="header">
      <button onClick={ scrollPage }>
        <img src={ logoY2News } alt="Logotipo" />
      </button>
    </HeaderContainer>
  );
}

export default Header;
