import { HeaderContainer } from './styles';
import logoY2News from '../../assets/logoY2News.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={ logoY2News } alt="Logotipo" />
    </HeaderContainer>
  );
}

export default Header;
