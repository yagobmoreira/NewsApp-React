import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
    </Routes>
  );
}

export default App;
