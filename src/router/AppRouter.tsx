import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ResultContainer } from '../components';
import { MoviePickerPage } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie-picker" element={<MoviePickerPage />}>
          <Route path="result" element={<ResultContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
