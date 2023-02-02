import {
  DetailContainer,
  BackdropImg,
  DetailArticle,
  PosterBox,
  DescriptionContainer,
  PosterImg,
  DescriptionBox,
  Description,
  MovieTitle,
  DescriptionLabel,
} from './DetailMoviesStyled';

type DetailMovieProps = {
  movies?: any;
};

export const DetailMovies = ({ movies }: DetailMovieProps) => {
  console.log(movies);

  const {
    backdrop_path,
    poster_path,
    title,
    original_title,
    tagline,
    release_date,
    overview,
  } = movies;
  return (
    <>
      <DetailContainer>
        <DetailArticle>
          <PosterBox>
            <PosterImg
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={`${poster_path}`}
            />
          </PosterBox>
          <DescriptionContainer>
            <DescriptionBox>
              <Description>
                <MovieTitle>
                  {title} ({original_title})
                </MovieTitle>
                <DescriptionLabel>{tagline}</DescriptionLabel>
                <DescriptionLabel>{release_date}</DescriptionLabel>
                <DescriptionLabel>{overview}</DescriptionLabel>
              </Description>
            </DescriptionBox>
          </DescriptionContainer>
        </DetailArticle>
      </DetailContainer>
      <BackdropImg
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={`${backdrop_path}`}
      />
    </>
  );
};
