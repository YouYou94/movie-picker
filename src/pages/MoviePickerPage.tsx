import { Outlet } from 'react-router';
import { SearchContainer } from '../components';

const MoviePickerPage = () => {
  return (
    <>
      <SearchContainer />
      <Outlet />
    </>
  );
};

export default MoviePickerPage;
