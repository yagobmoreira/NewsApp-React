import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from './redux/actions';
import Home from './pages/Home/Home';
import { Dispatch } from './utils/types';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <Home />
  );
}

export default App;
