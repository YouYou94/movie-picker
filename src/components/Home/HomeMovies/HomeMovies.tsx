import {
  MovieBox,
  MoviesLayout,
  MoviePoster,
  MovieCaption,
  MovieTitle,
  MovieReleaseDate,
  MovieOverview,
} from './HomeMoviesStyled';

type MoivesProp = {
  movies: Array<any>;
  onClickMoive: any;
};

export const HomeMovies = ({ movies, onClickMoive }: MoivesProp) => {
  return (
    <MoviesLayout>
      {movies?.map((movie) => {
        const { id, poster_path, title, release_date, overview } = movie;

        return (
          <MovieBox key={id} id={id} onClick={onClickMoive}>
            <MoviePoster
              poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
            ></MoviePoster>
            <MovieCaption>
              <MovieTitle>{title}</MovieTitle>
              <MovieReleaseDate>{release_date}</MovieReleaseDate>
              <MovieOverview>
                {overview ? overview.substr(0, 100) + '...' : 'overview 없음'}
              </MovieOverview>
            </MovieCaption>
          </MovieBox>
        );
      })}
    </MoviesLayout>
  );
};
