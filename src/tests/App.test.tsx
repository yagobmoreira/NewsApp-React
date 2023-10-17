import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { news } from './mocks/mockData';
import * as APIModule from '../utils/fetchApi';
import NewsProvider, { BASE_URL } from '../context/NewsProvider';
import App from '../App';
import { News } from '../utils/types';

// const MOCK_RESPONSE = {
//   ok: true,
//   status: 200,
//   json: async () => news,
// } as Response;

const BASE_URL_ERROR = 'https://servicodados.ibge.gov.br/api/v3/nocias/?qtd=100';
beforeEach(() => {
  vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(news as unknown as News);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('Testes da aplicação', () => {
  test('Verificar o Header', () => {
    render(<App />, { wrapper: BrowserRouter });
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('Verificar o fetch', async () => {
    render(
      <BrowserRouter>
        <NewsProvider>
          <App />
        </NewsProvider>
      </BrowserRouter>,
    );
    expect(APIModule.fetchApi).toHaveBeenCalledTimes(1);
    expect(APIModule.fetchApi).toHaveBeenCalledWith(BASE_URL);
  });

  test('Verificar se retorna um erro caso a requisição seja feita com uma URL errada', async () => {
    const MOCK_RESPONSE_ERROR = {
      ok: false,
      status: 404,
      json: async () => news,
    } as Response;

    vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(MOCK_RESPONSE_ERROR as unknown as News);
    await APIModule.fetchApi(BASE_URL_ERROR);

    render(
      <BrowserRouter>
        <NewsProvider>
          <App />
        </NewsProvider>
      </BrowserRouter>,
    );
    expect(APIModule.fetchApi).toHaveBeenCalled();
    expect(APIModule.fetchApi).toHaveBeenCalledWith(BASE_URL_ERROR);
  });

  test('Testar os elementos na tela', async () => {
    vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(news as unknown as News);
    const { debug } = render(
      <NewsProvider>
        <App />
      </NewsProvider>,
      { wrapper: BrowserRouter },
    );
    debug();
  });
});
