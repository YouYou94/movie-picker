import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const TMDB_KEY = process.env.REACT_APP_API_KEY;

const POPULAR = 'movie/popular';
const UPCOMING = 'movie/upcoming';
const SEARCH = 'search/movie';

type AxoisProps = {
  sub_url: string;
  search_name?: string | null | undefined;
};

// search/movie?api_key=${TMDB_KEY}&language=ko-KR&page=1&query=${name}
// movie/popular?api_key=${TMDB_KEY}&language=ko-KR&page=1
// movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&page=1

const useAxios = ({ sub_url, search_name }: AxoisProps) => {
  const [movies, setMovies] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getMovie = async (
    sub_url: string,
    name?: string | null | undefined,
  ) => {
    let query = '';

    if (name) query = `&query=${name}`;

    await axios
      .get(`${sub_url}?api_key=${TMDB_KEY}&language=ko-KR&page=1${query}`)
      .then((res) => {
        const { results } = res.data;

        if (sub_url === UPCOMING)
          results.sort(function (a: any, b: any) {
            return (
              Number(b.release_date.replaceAll('-', '')) -
              Number(a.release_date.replaceAll('-', ''))
            );
          });

        if (sub_url === UPCOMING || sub_url === POPULAR || sub_url === SEARCH)
          setMovies(results);
        else setMovies(res.data);
      })
      .catch((error) => setError(error));

    setLoading(false);
  };

  useEffect(() => {
    getMovie(sub_url, search_name);
  }, [sub_url, search_name]);

  return { movies, error, loading };
};

export default useAxios;
