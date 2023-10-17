import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Testes da aplicação', () => {
  test('Verificar o Header', () => {
    render(<App />, { wrapper: BrowserRouter });
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
