import {
  MoviesLayout,
  MovieBox,
  MoviePoster,
  MovieCaption,
  MovieTitle,
  MovieReleaseDate,
  MovieOverview,
} from './MoviesStyled';

type MoivesProp = {
  movies: Array<any>;
  onHandleClick?: any;
};

export const Movies = ({ movies, onHandleClick }: MoivesProp) => {
  return (
    <MoviesLayout>
      {movies?.map((movie) => {
        const { id, poster_path, title, release_date, overview } = movie;

        return (
          <MovieBox key={id} id={id} onClick={onHandleClick}>
            <MoviePoster
              poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
            />
            <MovieCaption>
              <MovieTitle>{title}</MovieTitle>
              <MovieReleaseDate>{release_date}</MovieReleaseDate>
              <MovieOverview>
                {overview ? overview.substr(0, 50) + '...' : 'overview 없음'}
              </MovieOverview>
            </MovieCaption>
          </MovieBox>
        );
      })}
    </MoviesLayout>
  );
};
