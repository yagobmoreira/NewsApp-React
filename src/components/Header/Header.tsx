import { HeaderContainer } from './styles';
import { scrollPage } from '../../utils';

function Header() {
  return (
    <HeaderContainer>
      <button onClick={ scrollPage }>
        <h1>IBGE News</h1>
      </button>
    </HeaderContainer>
  );
}

export default Header;
