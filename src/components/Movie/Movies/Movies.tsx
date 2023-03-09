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
  tabRef?: any;
  type: string;
  movies: Array<any>;
  searchKeyword?: string;
  onHandleClick?: any;
};

export const Movies = ({
  tabRef,
  type,
  movies,
  searchKeyword,
  onHandleClick,
}: MoivesProp) => {
  /* 캐러셀 슬라이드 기능 */
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onHandleClickPrev = () => {
    if (currentSlide !== 0) setCurrentSlide(currentSlide - 1);
  };

  const onHandleClickNext = () => {
    if (currentSlide !== Math.ceil(movies.length / 5))
      setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const { current } = carouselRef;

    if (current !== null) {
      current.style.transition = 'all 0.5s ease-in-out';
      current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <Layout ref={(el) => (tabRef.current[2] = el)}>
      <PrevButton onClick={onHandleClickPrev}>
        <PrevImage alt="이전 버튼" />
      </PrevButton>
      <NextButton onClick={onHandleClickNext}>
        <NextImage alt="다음 버튼" />
      </NextButton>
      <Title>
        {type === 'POPULAR'
          ? 'POPULAR 20'
          : type === 'UPCOMING'
          ? 'UPCOMING 20'
          : `'${searchKeyword ? searchKeyword : '없음'}' 을(를) 검색한 결과`}
      </Title>
      <CarouselBox>
        <MoviesBox ref={carouselRef}>
          {movies.map((movie) => {
            const { poster_path, id } = movie;
            return (
              <MoviePoster
                key={id}
                id={id}
                onClick={onHandleClick}
                poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
              />
            );
          })}
        </MoviesBox>
      </CarouselBox>
    </Layout>
  );
};
