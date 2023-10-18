import { AnyAction } from 'redux';
import { NewsType, News, Item } from '../../utils/types';
import {
  REQUEST_NEWS_API_START,
  REQUEST_NEWS_API_SUCCESS,
  REQUEST_NEWS_API_ERROR,
  REQUEST_BREAKING_NEWS,
  REQUEST_ACTIVE_BUTTON,
  REQUEST_CONTENT,
  REQUEST_FILTER,
  REQUEST_QUANTITY_NEWS,
  REQUEST_TOGGLE_ORIENTATION,
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
    case REQUEST_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case REQUEST_QUANTITY_NEWS:
      return {
        ...state,
        quantity: action.payload,
      };
    case REQUEST_TOGGLE_ORIENTATION:
      return {
        ...state,
        toggleOrientationType: action.payload,
      };
    case REQUEST_ACTIVE_BUTTON:
      return {
        ...state,
        activeButton: action.payload,
      };
    case REQUEST_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    default: return state;
  }
};

export default news;
