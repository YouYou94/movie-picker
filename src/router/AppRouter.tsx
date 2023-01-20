import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tvshow-alone" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
