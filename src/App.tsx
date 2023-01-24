import { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter';
import './App.css';
import axios from 'axios';

function App() {
  // Context API 사용하기
  // 커스텀 훅 사용하기
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=69c4823b56b37a91a1ea5845cce9ce43',
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
