import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tvshow-alone" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
