import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type Item = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type News = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: Item[];
};

export type NewsType = {
  status: string;
  news: News;
  breakingNews: Item[];
  filter: string;
  quantity: number;
  toggleOrientationType: boolean;
  activeButton: string;
  content: boolean;
};

export type GlobalStateType = {
  news: NewsType;
};

export type Dispatch = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
