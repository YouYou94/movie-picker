import {
  DetailContainer,
  BackdropImg,
  DescriptionContainer,
  EtcContainer,
  PosterBox,
  PosterImg,
  OverviewContainer,
  OverviewBox,
  MovieTitle,
  MovieTagline,
  OverviewLabel,
  PickerBox,
  PickerButton,
  Line,
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
    release_date,
    genres,
    runtime,
    tagline,
    overview,
  } = movies;

  //console.log(movies);

  // 내일 detail 부분 css 수정 tmdb detail처럼 변경하기
  return (
    <>
      <DetailContainer>
        <DescriptionContainer>
          <PosterBox>
            <PosterImg
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={`${poster_path}`}
            />
          </PosterBox>
          <OverviewContainer>
            <MovieTitle>
              {title} ({original_title})
            </MovieTitle>
            <MovieTagline>{tagline}</MovieTagline>
            <OverviewLabel>{release_date}</OverviewLabel>
            <OverviewBox>
              <OverviewLabel>
                {genres.map((genre: any) => {
                  return genre?.name + ' ';
                })}
                / {runtime} 분
              </OverviewLabel>
            </OverviewBox>
            <OverviewLabel>{overview}</OverviewLabel>
            <PickerBox>
              <PickerButton onClick={onClickPicker}>PICKER</PickerButton>
            </PickerBox>
          </OverviewContainer>
        </DescriptionContainer>
        <Line />
        <EtcContainer></EtcContainer>
      </DetailContainer>
      <BackdropImg
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={`${backdrop_path}`}
      />
    </>
  );
};
