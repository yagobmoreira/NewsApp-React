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
  test('Verificar o Header', () => {
    renderWithRedux(<App />);
    const header = screen.getByRole('banner');
    const logoBtn = screen.getByRole('heading', { name: 'IBGE News' });
    expect(header).toBeInTheDocument();
    expect(logoBtn).toBeInTheDocument();
  });

  test('Verificar o Footer', () => {
    renderWithRedux(<App />);
    const footer = screen.getByRole('contentinfo');
    const footerBtn = screen.getByRole('button', { name: 'últimas notícias' });
    expect(footer).toBeInTheDocument();
    expect(footerBtn).toBeInTheDocument();
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
    const newsButton = screen.getByRole('button', { name: 'Notícias' });
    const releasesButton = screen.getByRole('button', { name: 'Releases' });
    const filterFavoriteButton = screen.getByRole('button', { name: 'Favoritos' });
    const moreNewsButton = screen.getByRole('button', { name: 'Mais notícias' });
    expect(newsButton).toBeInTheDocument();
    expect(releasesButton).toBeInTheDocument();
    await user.click(newsButton);
    const news = screen.getAllByTestId('news-card');
    const filteredNews = mockNews.items.filter((item) => item.tipo === 'Notícia');
    expect(news[0]).toHaveTextContent(filteredNews[3].titulo); // Começo a renderizar a partir do 4º item de filteredItems
    expect(store.getState().news.activeButton).toBe('Notícia');
    await user.click(filterFavoriteButton);
    expect(moreNewsButton).not.toBeInTheDocument();
    await user.click(releasesButton);
    const releases = screen.getAllByTestId('news-card');
    const filteredReleases = mockNews.items.filter((item) => item.tipo === 'Release');
    expect(releases[0]).toHaveTextContent(filteredReleases[3].titulo);
  });

  test('Teste da função de favoritar notícias', async () => {
    renderWithRedux(<App />, { initialState: MOCK_INITIAL_STATE });
    window.localStorage.clear();
    const favoriteButton = screen.getAllByTestId('favorite-btn');
    const filterFavoriteButton = screen.getByRole('button', { name: 'Favoritos' });
    await user.click(favoriteButton[0]);
    await user.click(favoriteButton[2]);
    await user.click(filterFavoriteButton);
    const news = screen.getAllByTestId('news-card');
    expect(news.length).toBe(2);
    expect(window.localStorage.getItem('favoriteNews')).toEqual(JSON.stringify([mockNews.items[3], mockNews.items[5]]));
    const fvButton = screen.getAllByTestId('favorite-btn');
    await user.click(fvButton[0]); // removeFromFavorites
    expect(window.localStorage.getItem('favoriteNews')).toEqual(JSON.stringify([mockNews.items[5]]));
    const toggleBtn = screen.getByRole('button', { name: 'toggleOrientation' });
    await user.click(toggleBtn);
  });
});
