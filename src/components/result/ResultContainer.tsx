import { useLocation } from 'react-router';
import useAxios from '../../hooks/useAxios';
import ResultPresenter from './ResultPresenter';

const ResultContainer = () => {
  const location = useLocation();
  const search_name = location.state.searchData;
  const { data, error, loading } = useAxios({ search_name });

  console.log(data, loading);

  return <ResultPresenter loading={loading} />;
};

export default ResultContainer;
