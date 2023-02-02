import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import {
  DetailMovies,
  Loading,
  Template,
  UserOperation,
} from '../../components';

const MOVIE = 'movie/';

const MovieContainer = () => {
  const param = useParams();

  const { movies, error, loading } = useAxios({
    sub_url: `${MOVIE}${param.id}`,
  });

  useEffect(() => {
    if (error) alert(`에러! ${error}`);
  }, [error]);

  return (
    <Template>
      <UserOperation />
      {loading ? <Loading /> : <DetailMovies movies={movies} />}
    </Template>
  );
};

export default MovieContainer;
