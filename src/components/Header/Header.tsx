import { HeaderContainer } from './styles';
import trybeLogo from '../../assets/trybeLogo.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={ trybeLogo } alt="Logotipo da Trybe" />
      <h1>Trybe News</h1>
    </HeaderContainer>
  );
}

export default Header;
