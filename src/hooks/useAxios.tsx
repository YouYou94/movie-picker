import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const TMDB_KEY = process.env.REACT_APP_API_KEY;

type AxoisProps = {
  search_name: String;
};

const useAxios = ({ search_name }: AxoisProps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async (name: String) => {
    await axios
      .get(
        `3/search/movie?api_key=${TMDB_KEY}&&language=ko-KR&page=1&query=${name}`,
      )
      .then((res) => {
        const { results } = res.data;

        setData(results);
      })
      .catch((error) => setError(error));

    setLoading(false);
  };

  useEffect(() => {
    getMovie(search_name);
  }, []);

  return { data, error, loading };
};

export default useAxios;
