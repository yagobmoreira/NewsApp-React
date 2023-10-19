import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRedux } from './helpers/renderWith';
import * as APIModule from '../utils/fetchApi';
import { News } from '../utils/types';
import { getImageURL } from '../utils';
import { mockNews, mockBreakingNews } from './helpers/mockData';
import { BASE_IMAGE_URL } from '../components/NewHero/NewHero';
import App from '../App';

const MOCK_INITIAL_STATE = {
  news: {
    status: 'Requisição concluída',
    news: mockNews,
    breakingNews: mockBreakingNews,
    filter: '',
    quantity: 12,
    toggleOrientationType: true,
    activeButton: 'maisRecentes',
    content: true,
  },
};

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(mockNews as News);
});

afterEach(() => {
  vi.clearAllMocks();
});

const user = userEvent.setup();

describe('Testes da aplicação', () => {
  test('Verificar o Header', async () => {
    renderWithRedux(<App />);
    const header = screen.getByRole('banner');
    const logoBtn = screen.getByRole('button', { name: 'Logotipo' });
    expect(header).toBeInTheDocument();
    expect(logoBtn).toBeInTheDocument();
  });

  test('Testar o Hero', () => {
    renderWithRedux(<App />, { initialState: MOCK_INITIAL_STATE });
    const mainHero = screen.getByRole('img', { name: 'Main news' });
    const secondaryHero = screen.getAllByRole('img', { name: 'Secondary news' });
    expect(mainHero).toHaveAttribute('src', `${BASE_IMAGE_URL}${getImageURL(mockBreakingNews[0])}`);
    expect(secondaryHero[0]).toHaveAttribute('src', `${BASE_IMAGE_URL}${getImageURL(mockBreakingNews[1])}`);
    expect(secondaryHero[1]).toHaveAttribute('src', `${BASE_IMAGE_URL}${getImageURL(mockBreakingNews[2])}`);
  });

  test('Testar a renderização do Content', async () => {
    const { store } = renderWithRedux(<App />, { initialState: MOCK_INITIAL_STATE });
    const cards = screen.getAllByTestId('news-card');
    const moreNewsButton = screen.getByRole('button', { name: 'Mais notícias' });
    expect(cards.length).toBe(store.getState().news.quantity - 3); // 3 cards são renderizados no Hero
    expect(moreNewsButton).toBeInTheDocument();

    await user.click(moreNewsButton);
    expect(store.getState().news.quantity).toBe(MOCK_INITIAL_STATE.news.quantity + 6); // 6 cards a mais são renderizados ao clicar no botão
    await user.click(moreNewsButton);
    expect(store.getState().news.quantity).toBe(24); // 12 cards a mais são renderizados ao clicar no botão
  });

  test('Testar a renderização do Content com filtro', async () => {
    const { store } = renderWithRedux(<App />, { initialState: MOCK_INITIAL_STATE });
    expect(store.getState().news.activeButton).toBe('maisRecentes');
    const filterButton = screen.getByRole('button', { name: 'Notícias' });
    expect(filterButton).toBeInTheDocument();
    await user.click(filterButton);
    const news = screen.getAllByTestId('news-card');
    const filteredNews = mockNews.items.filter((item) => item.tipo === 'Notícia');
    expect(news[0]).toHaveTextContent(filteredNews[3].titulo); // Começo a renderizar a partir do 4º item de filteredItems
    expect(store.getState().news.activeButton).toBe('Notícia');
    const filterFavoriteButton = screen.getByRole('button', { name: 'Favoritos' });
    const moreNewsButton = screen.getByRole('button', { name: 'Mais notícias' });
    await user.click(filterFavoriteButton);
    expect(moreNewsButton).not.toBeInTheDocument();
  });

  test('Teste da função de favoritar notícias', async () => {
    renderWithRedux(<App />, { initialState: MOCK_INITIAL_STATE });
    const favoriteButton = screen.getAllByTestId('favorite-btn');
    const filterFavoriteButton = screen.getByRole('button', { name: 'Favoritos' });
    await user.click(favoriteButton[0]);
    await user.click(favoriteButton[2]);
    await user.click(filterFavoriteButton);
    const news = screen.getAllByTestId('news-card');
    expect(news.length).toBe(2);
    const toggleBtn = screen.getByRole('button', { name: 'toggleOrientation' });
    await user.click(toggleBtn);
  });
});
