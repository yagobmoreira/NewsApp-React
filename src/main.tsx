import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NewsProvider from './context/NewsProvider.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NewsProvider>
      <App />
    </NewsProvider>
  </BrowserRouter>,
);
