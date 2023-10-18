import ReactDOM from 'react-dom/client';
import NewsProvider from './context/NewsProvider.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NewsProvider>
    <App />
  </NewsProvider>,
);
