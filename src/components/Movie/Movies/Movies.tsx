import { useState, useEffect, useRef } from 'react';
import {
  Layout,
  Title,
  CarouselBox,
  MoviesBox,
  MoviePoster,
  PrevButton,
  NextButton,
  PrevImage,
  NextImage,
} from './MoviesStyled';

type MoivesProp = {
  type?: string;
  movies: Array<any>;
  onHandleClick?: any;
};

export const Movies = ({ type, movies, onHandleClick }: MoivesProp) => {
  /* 캐러셀 슬라이드 기능 */
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onHandleClickPrev = () => {
    if (currentSlide !== 0) setCurrentSlide(currentSlide - 1);
  };

  const onHandleClickNext = () => {
    if (currentSlide !== 4) setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const { current } = carouselRef;

    if (current !== null) {
      current.style.transition = 'all 0.5s ease-in-out';
      current.style.transform = `translateX(-${currentSlide * 16.7}%)`;
    }
  }, [currentSlide]);

  return (
    <Layout>
      <PrevButton onClick={onHandleClickPrev}>
        <PrevImage alt="이전 버튼" />
      </PrevButton>
      <NextButton onClick={onHandleClickNext}>
        <NextImage alt="다음 버튼" />
      </NextButton>
      <Title>{type === 'POPULAR' ? 'Popular ' : 'Upcoming '}20</Title>
      <CarouselBox ref={carouselRef}>
        <MoviesBox>
          {movies.map((movie) => {
            return (
              <MoviePoster
                poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            );
          })}
        </MoviesBox>
      </CarouselBox>
    </Layout>
  );
};
