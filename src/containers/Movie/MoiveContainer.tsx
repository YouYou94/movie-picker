import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import _ from 'lodash';
import {
  DetailHeader,
  DetailMovies,
  Loading,
  Picker,
  PosterTemplate,
  UserOperation,
} from '../../components';
import { useRecoilState } from 'recoil';
import { displayState, pickerState } from '../../recoil/atom';

const MOVIE = 'movie/';

const MovieContainer = () => {
  const param = useParams();

  const { movies, error, loading } = useAxios({
    sub_url: `${MOVIE}${param.id}`,
  });

  const [picker, setPicker] = useRecoilState(pickerState);
  const [isDisplay, setIsDisplay] = useRecoilState(displayState);

  const onClickPicker = () => {
    const { title, poster_path } = movies;

    setPicker(
      _.uniqBy([...picker, { id: param.id, title, poster_path }], 'id'),
    );
  };

  useEffect(() => {
    if (error) alert(`에러! ${error}`);
  }, [error]);

  return (
    <PosterTemplate background_path={movies ? movies.backdrop_path : ''}>
      <DetailHeader />
      {}
    </PosterTemplate>
  );
};

export default MovieContainer;
