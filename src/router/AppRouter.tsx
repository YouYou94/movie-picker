import { BrowserRouter, Routes } from 'react-router-dom';
import { SearchContainer } from '../components';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchContainer />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
