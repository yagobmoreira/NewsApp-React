import { HeaderContainer } from './styles';

function Header() {
  const scrollPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <HeaderContainer>
      <button onClick={ scrollPage }>
        <h1>IBGE News</h1>
      </button>
    </HeaderContainer>
  );
}

export default Header;
