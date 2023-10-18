import { useDispatch } from 'react-redux';
import { Dispatch } from '../utils/types';
import { requestFilter,
  requestContent,
  requestActiveButton,
  requestQuantityNews,
} from '../redux/actions';

const useContentFilters = () => {
  const dispatch = useDispatch<Dispatch>();

  const handleContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    dispatch(requestActiveButton(value));
    dispatch(requestQuantityNews(12));
    if (value === 'favoritos') {
      dispatch(requestFilter(value));
      dispatch(requestContent(false));
    } else {
      dispatch(requestFilter(value));
      dispatch(requestContent(true));
    }
  };

  return { handleContent };
};

export default useContentFilters;
