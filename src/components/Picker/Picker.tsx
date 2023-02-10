import React, { useEffect, useRef } from 'react';
import {
  PickerContainer,
  PickerHeader,
  ExitImage,
  PickerList,
  PickerItem,
  PosterBox,
  PosterImg,
  PickerMovieTitle,
} from './PickerStyled';

type PickerProps = {
  picker: any[];
  isDisplay: boolean;
  setIsDisplay: any;
};

export const Picker = ({ picker, isDisplay, setIsDisplay }: PickerProps) => {
  const pickerRef = useRef<HTMLDivElement>(null);

  const onClickPickerExit = () => setIsDisplay(false);

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
          const { id, poster_path, title } = pickermovie;
          return (
            <PickerItem key={id}>
              <PosterBox>
                <PosterImg
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={`${poster_path}`}
                />
              </PosterBox>
              <PickerMovieTitle>{title}</PickerMovieTitle>
            </PickerItem>
          );
        })}
      </PickerList>
    </PickerContainer>
  );
};
