import { useSelector } from 'react-redux';
import { GlobalStateType, NewsType } from '../utils/types';

const useSelectFromStore = () => {
  const gState = useSelector((globalState: GlobalStateType) => globalState.news);
  const selectState = (state: keyof NewsType) => {
    return gState[state];
  };
  return { selectState };
};

export default useSelectFromStore;
