import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import {
  DetailHeader,
  DetailMovies,
  Loading,
  Picker,
  PosterTemplate,
} from '../../components';
import { useRecoilState } from 'recoil';
import { pickerState } from '../../recoil/atom';

const MOVIE = 'movie/';

const MovieContainer = () => {
  const param = useParams();

  const { movies, error, loading } = useAxios({
    sub_url: `${MOVIE}${param.id}`,
  });

  const [picker, setPicker] = useRecoilState(pickerState);
  const [isDisplay, setIsDisplay] = useState(false);

  const onClickPicker = () => {
    const { title, poster_path, release_date, genres } = movies;

    setPicker(
      _.uniqBy(
        [...picker, { id: param.id, title, poster_path, release_date, genres }],
        'id',
      ),
    );
  };

  useEffect(() => {
    if (error) alert(`에러! ${error}`);
  }, [error]);

  return (
    <PosterTemplate background_path={movies ? movies.backdrop_path : ''}>
      <Picker
        picker={picker}
        isDisplay={isDisplay}
        setIsDisplay={setIsDisplay}
      />
      <DetailHeader setIsDisplay={setIsDisplay} />
      {loading ? (
        <Loading />
      ) : (
        <DetailMovies movies={movies} onHandlerClick={onClickPicker} />
      )}
    </PosterTemplate>
  );
};

export default MovieContainer;
