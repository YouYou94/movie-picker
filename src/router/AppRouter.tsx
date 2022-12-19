import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import TopBar from '../components/TopBar/TopBar';
import Home from '../pages/Home/Home';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/tvshow-alone" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
