import { AnyAction } from 'redux';
import { NewsType, News, Item } from '../../utils/types';
import {
  REQUEST_NEWS_API_START,
  REQUEST_NEWS_API_SUCCESS,
  REQUEST_NEWS_API_ERROR,
  REQUEST_BREAKING_NEWS,
  CHANGE_FILTER,
  SET_QUANTITY_NEWS,
  SET_TOGGLE_ORIENTATION,
} from '../actions';

const INITIAL_STATE = {
  status: '',
  news: {} as News,
  breakingNews: [] as Item[],
  filter: '',
  quantity: 12,
  toggleOrientationType: true,
  activeButton: 'maisRecentes',
  content: true,
};

const news = (state: NewsType = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_NEWS_API_START:
      return {
        ...state,
        status: 'Requisição iniciada',
      };
    case REQUEST_NEWS_API_SUCCESS:
      return {
        ...state,
        status: 'Requisição concluída',
        news: action.payload,
      };
    case REQUEST_NEWS_API_ERROR:
      return {
        ...state,
        status: 'Requisição falhou',
      };
    case REQUEST_BREAKING_NEWS:
      return {
        ...state,
        breakingNews: action.payload,
      };
    case CHANGE_FILTER: {
      const { value } = action.payload;
      const content = value !== 'favoritos';
      return {
        ...state,
        activeButton: value,
        quantityNews: 12,
        filter: value,
        content,
      };
    }
    case SET_QUANTITY_NEWS:
      return {
        ...state,
        quantity: action.payload,
      };
    case SET_TOGGLE_ORIENTATION:
      return {
        ...state,
        toggleOrientationType: action.payload,
      };
    default: return state;
  }
};

export default news;
