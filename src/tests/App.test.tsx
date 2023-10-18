import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import NewsProvider, { BASE_URL } from '../context/NewsProvider';
import NewsContext from '../context/NewsContext';
import * as APIModule from '../utils/fetchApi';
import { News } from '../utils/types';
import getImageURL from '../utils/getImageURL';
import { mockNews, mockBreakingNews } from './mocks/mockData';
import App from '../App';

const BASE_URL_ERROR = 'https://servicodados.ibge.gov.br/api/v3/nocias/?qtd=100';

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(mockNews as News);
});

afterEach(() => {
  vi.clearAllMocks();
});

const user = userEvent.setup();

describe('Testes da aplicação', () => {
  test('Verificar o Header', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('Verificar o fetch', async () => {
    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );
    expect(APIModule.fetchApi).toHaveBeenCalledTimes(1);
    expect(APIModule.fetchApi).toHaveBeenCalledWith(BASE_URL);
  });

  test('Verificar se retorna um erro caso a requisição seja feita com uma URL errada', async () => {
    const MOCK_RESPONSE_ERROR = {
      ok: false,
      status: 404,
      json: async () => mockNews,
    } as Response;

    vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(MOCK_RESPONSE_ERROR as unknown as News);
    await APIModule.fetchApi(BASE_URL_ERROR);

    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );
    expect(APIModule.fetchApi).toHaveBeenCalled();
    expect(APIModule.fetchApi).toHaveBeenCalledWith(BASE_URL_ERROR);
  });

  test('Testar os elementos do Hero', async () => {
    render(
      <NewsContext.Provider
        value={ {
          news: {} as News,
          breakingNews: mockBreakingNews,
          filter: '',
          setFilter: () => {},
          quantityNews: 12,
          setQuantityNews: () => {},
          toggleOrientation: true,
          setToggleOrientation: () => {},
        } }
      >
        <App />
      </NewsContext.Provider>,
    );
    const heroContainer = screen.getByTestId('heroContainer');
    const mainHeroTitle = screen.getByRole('heading', { name: mockBreakingNews[0].titulo });
    const mainHeroImage = screen.getByAltText('Main news');
    const secondaryTitle1 = screen.getByRole('heading', { name: mockBreakingNews[1].titulo });
    const secondaryTitle2 = screen.getByRole('heading', { name: mockBreakingNews[2].titulo });
    const secondaryImages = screen.getAllByAltText('Secondary news');

    expect(heroContainer).toBeInTheDocument();
    expect(mainHeroTitle).toBeInTheDocument();
    expect(mainHeroImage).toHaveAttribute('src', `https://agenciadenoticias.ibge.gov.br/${getImageURL(mockBreakingNews[0])}`);
    expect(secondaryTitle1).toBeInTheDocument();
    expect(secondaryTitle2).toBeInTheDocument();
    expect(secondaryImages.length).toBe(2);
    expect(secondaryImages[0]).toHaveAttribute('src', `https://agenciadenoticias.ibge.gov.br/${getImageURL(mockBreakingNews[1])}`);
    expect(secondaryImages[1]).toHaveAttribute('src', `https://agenciadenoticias.ibge.gov.br/${getImageURL(mockBreakingNews[2])}`);
  });

  test('Testar se os cards de notícias são renderizados', async () => {
    const { debug } = render(
      <NewsContext.Provider
        value={ {
          news: mockNews,
          breakingNews: [],
          filter: '',
          setFilter: () => {},
          quantityNews: 12,
          setQuantityNews: () => {},
          toggleOrientation: true,
          setToggleOrientation: () => {},
        } }
      >
        <App />
      </NewsContext.Provider>,
    );
    const newsCard = screen.getAllByTestId('news-card');
    const moreNewsButton = screen.getByRole('button', { name: /mais notícias/i });
    expect(moreNewsButton).toBeInTheDocument();
    expect(newsCard.length).toBe(9);
    // console.log(moreNewsButton);
    // await act(async () => user.click(moreNewsButton));
    // newsCard = screen.getAllByTestId('news-card');
    // expect(newsCard.length).toBe(15);
  });
});
