import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  PickerContainer,
  PickerHeader,
  ExitImage,
  PickerList,
  PickerItem,
  PosterBox,
  PosterImg,
  PickerMovieCaptionBox,
  CaptionLabel,
} from './PickerStyled';

type PickerProps = {
  picker: any[];
  isDisplay: boolean;
  setIsDisplay: any;
};

export const Picker = ({ picker, isDisplay, setIsDisplay }: PickerProps) => {
  const navigate = useNavigate();
  const pickerRef = useRef<HTMLDivElement>(null);

  const onClickPickerExit = () => setIsDisplay(false);

  const onClickPickerItem = (event: React.MouseEvent<HTMLLIElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  /* 모달 영역 밖 클릭 시 모달창 닫힘 기능 */
  const handleClickOutSide = (event: any) => {
    if (isDisplay && !pickerRef.current?.contains(event.target)) {
      setIsDisplay(false);
    }
  };

  useEffect(() => {
    if (isDisplay) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <PickerContainer ref={pickerRef} isDisplay={isDisplay}>
      <PickerHeader>
        <ExitImage onClick={onClickPickerExit} alt="EXIT" />
      </PickerHeader>
      <PickerList>
        {picker?.map((pickermovie) => {
          const { id, poster_path, title, release_date, genres } = pickermovie;
          return (
            <PickerItem key={id} id={id} onClick={onClickPickerItem}>
              <PosterBox>
                <PosterImg
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={`${poster_path}`}
                />
              </PosterBox>
              <PickerMovieCaptionBox>
                <CaptionLabel>{title}</CaptionLabel>
                <CaptionLabel>{release_date}</CaptionLabel>
                <CaptionLabel>
                  {genres.map((genre: any) => {
                    return genre?.name + ' ';
                  })}
                </CaptionLabel>
              </PickerMovieCaptionBox>
            </PickerItem>
          );
        })}
      </PickerList>
    </PickerContainer>
  );
};
