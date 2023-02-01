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
};

export const HomeMovies = ({ movies }: MoivesProp) => {
  return (
    <MoviesLayout>
      {movies?.map((movie) => {
        const { id, poster_path, title, release_date, overview } = movie;

        return (
          <MovieBox key={id}>
            <MoviePoster
              poster={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
