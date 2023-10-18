import { Dispatch, Item, News } from '../../utils/types';
import { BASE_URL } from '../../context/NewsProvider';
import { fetchApi } from '../../utils/fetchApi';

export const REQUEST_NEWS_API_START = 'REQUEST_NEWS_API_START';
export const REQUEST_NEWS_API_SUCCESS = 'REQUEST_NEWS_API_SUCCESS';
export const REQUEST_NEWS_API_ERROR = 'REQUEST_NEWS_API_ERROR';
export const REQUEST_BREAKING_NEWS = 'REQUEST_BREAKING_NEWS';
export const REQUEST_FILTER = 'REQUEST_FILTER';
export const REQUEST_QUANTITY_NEWS = 'REQUEST_QUANTITY_NEWS';
export const REQUEST_TOGGLE_ORIENTATION = 'REQUEST_TOGGLE_ORIENTATION';
export const REQUEST_ACTIVE_BUTTON = 'REQUEST_ACTIVE_BUTTON';
export const REQUEST_CONTENT = 'REQUEST_CONTENT';

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

export const requestFilter = (payload: string) => ({
  type: REQUEST_FILTER,
  payload,
});

export const requestQuantityNews = (payload: number) => ({
  type: REQUEST_QUANTITY_NEWS,
  payload,
});

export const requestToggleOrientation = (payload: boolean) => ({
  type: REQUEST_TOGGLE_ORIENTATION,
  payload,
});

export const requestActiveButton = (payload: string) => ({
  type: REQUEST_ACTIVE_BUTTON,
  payload,
});

export const requestContent = (payload: boolean) => ({
  type: REQUEST_CONTENT,
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
