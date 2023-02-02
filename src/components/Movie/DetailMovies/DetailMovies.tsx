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
  PickerBox,
  PickerButton,
} from './DetailMoviesStyled';

type DetailMovieProps = {
  movies?: any;
  onClickPicker: any;
};

export const DetailMovies = ({ movies, onClickPicker }: DetailMovieProps) => {
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
              <PickerBox>
                <PickerButton onClick={onClickPicker}>PICKER</PickerButton>
              </PickerBox>
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
