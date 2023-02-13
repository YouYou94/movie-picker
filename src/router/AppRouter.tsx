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

/*
리펙터링

/moviepicker
- 홈 URL
- 구성
    - Header (Fixed)
    - Trailer (height 100vh)
    - searchbar
    - section (인기, 최신)
    - footer
*/
