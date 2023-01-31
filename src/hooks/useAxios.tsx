import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const TMDB_KEY = process.env.REACT_APP_API_KEY;

type AxoisProps = {
  sub_url: string;
  search_name?: string | null | undefined;
};

// search/movie?api_key=${TMDB_KEY}&language=ko-KR&page=1&query=${name}
// movie/popular?api_key=${TMDB_KEY}&language=ko-KR&page=1
// movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&page=1

const useAxios = ({ sub_url, search_name }: AxoisProps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async (
    sub_url: string,
    name?: string | null | undefined,
  ) => {
    let query = '';

    if (!name) query = `query=${name}`;

    await axios
      .get(`${sub_url}?api_key=${TMDB_KEY}&language=ko-KR&page=1${query}`)
      .then((res) => {
        const { results } = res.data;

        setData(results);
      })
      .catch((error) => setError(error));

    setLoading(false);
  };

  useEffect(() => {
    getMovie(sub_url, search_name);
  }, [sub_url, search_name]);

  return { data, error, loading };
};

export default useAxios;
