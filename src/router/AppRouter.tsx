import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Movie, Search } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/moviepicker" />} />
        <Route path="/moviepicker/*" element={<Home />} />
        <Route path="/moviepicker/movie/:id" element={<Movie />} />
        <Route path="/moviepicker/search/:id" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
