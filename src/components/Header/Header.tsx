import { HeaderContainer } from './styles';
import trybeLogo from '../../../public/trybeLogo.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={ trybeLogo } alt="Logotipo da Trybe" />
      <h1>TrybeNews</h1>
    </HeaderContainer>
  );
}

export default Header;
