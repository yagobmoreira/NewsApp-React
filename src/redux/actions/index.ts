import { Dispatch, Item, News } from '../../utils/types';
import { fetchApi } from '../../utils/fetchApi';

export const REQUEST_NEWS_API_START = 'REQUEST_NEWS_API_START';
export const REQUEST_NEWS_API_SUCCESS = 'REQUEST_NEWS_API_SUCCESS';
export const REQUEST_NEWS_API_ERROR = 'REQUEST_NEWS_API_ERROR';
export const REQUEST_BREAKING_NEWS = 'REQUEST_BREAKING_NEWS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const REQUEST_FILTER = 'REQUEST_FILTER';
export const SET_QUANTITY_NEWS = 'SET_QUANTITY_NEWS';
export const SET_TOGGLE_ORIENTATION = 'SET_TOGGLE_ORIENTATION';
export const REQUEST_ACTIVE_BUTTON = 'REQUEST_ACTIVE_BUTTON';
export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

export const requestNewsApiStart = () => ({
  type: REQUEST_NEWS_API_START,
});

export const requestNewsApiSuccess = (payload: News) => ({
  type: REQUEST_NEWS_API_SUCCESS,
  payload,
});

export const requestNewsApiError = () => ({
  type: REQUEST_NEWS_API_ERROR,
});

export const requestBreakingNews = (payload: Item[]) => ({
  type: REQUEST_BREAKING_NEWS,
  payload,
});

export const changeFilter = (payload: React.MouseEvent<HTMLButtonElement>) => ({
  type: CHANGE_FILTER,
  payload: payload.target,
});

export const setQuantityNews = (payload: number) => ({
  type: SET_QUANTITY_NEWS,
  payload,
});

export const setToggleOrientation = (payload: boolean) => ({
  type: SET_TOGGLE_ORIENTATION,
  payload,
});

export const fetchNews = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestNewsApiStart());
    const data = await fetchApi(BASE_URL);
    dispatch(requestNewsApiSuccess(data));
    dispatch(requestBreakingNews(data
      .items.filter((item) => item.destaque === true && item.tipo === 'Notícia')));
  } catch (error) {
    dispatch(requestNewsApiError());
  }
};
