import { Link } from 'react-router-dom';
import { NavContainer } from './styles';

function Nav() {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
    </NavContainer>
  );
}

export default Nav;
