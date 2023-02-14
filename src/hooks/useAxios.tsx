import axios from 'axios';
import { useEffect, useState } from 'react';
import { POPULAR, UPCOMING, SEARCH } from '../Constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const TMDB_KEY = process.env.REACT_APP_API_KEY;

type AxoisProps = {
  sub_url?: string;
  search_name?: string | null | undefined;
  type?: string;
};

// search/movie?api_key=${TMDB_KEY}&language=ko-KR&page=1&query=${name}
// movie/popular?api_key=${TMDB_KEY}&language=ko-KR&page=1
// movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&page=1

const useAxios = ({ sub_url, search_name, type }: AxoisProps) => {
  const [movies, setMovies] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  /* Popular Movies */
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [popularError, setPopularError] = useState<string>('');
  const [popularLoading, setPopularLoading] = useState<boolean>(true);

  const getPopularMovie = async () => {
    await axios
      .get(`movie/popular?api_key=${TMDB_KEY}&language=ko-KR&page=1`)
      .then((res) => {
        const { results } = res.data;

        setPopularMovies(results);
      })
      .catch((error) => setPopularError(`에러 : ${error}`));

    setPopularLoading(false);
  };

  /* Upcoming Movies */
  const [upcomingMovies, setUpcomingMovies] = useState<any>([]);
  const [upcomingError, setUpcomingError] = useState<string>('');
  const [upcomingLoading, setUpcomingLoading] = useState<boolean>(true);

  const getUpcomingMovies = async () => {
    await axios
      .get(`movie/upcoming?api_key=${TMDB_KEY}&language=ko-KR&page=1`)
      .then((res) => {
        const { results } = res.data;

        results.sort(function (a: any, b: any) {
          return (
            Number(b.release_date.replaceAll('-', '')) -
            Number(a.release_date.replaceAll('-', ''))
          );
        });

        setUpcomingMovies(results);
      })
      .catch((error) => setUpcomingError(`에러 : ${error}`));

    setUpcomingLoading(false);
  };

  /* Search Movies */
  const [searchMovies, setSearchMovies] = useState<any>([]);
  const [searchError, setSearchError] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(true);

  const getSearchMovies = async () => {
    await axios
      .get(
        `search/movie?api_key=${TMDB_KEY}&language=ko-KR&page=1&query=${search_name}`,
      )
      .then((res) => {
        const { results } = res.data;

        setSearchMovies(results);
      })
      .catch((error) => setSearchError(`에러 : ${error}`));

    setSearchLoading(false);
  };

  useEffect(() => {
    if (type === POPULAR) getPopularMovie();
    else if (type === UPCOMING) getUpcomingMovies();
    else if (type === SEARCH) getSearchMovies();
  }, [type]);

  return {
    movies,
    error,
    loading,
    popularMovies,
    popularError,
    popularLoading,
    upcomingMovies,
    upcomingError,
    upcomingLoading,
    searchMovies,
    searchError,
    searchLoading,
  };
};

export default useAxios;

/*

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

*/
