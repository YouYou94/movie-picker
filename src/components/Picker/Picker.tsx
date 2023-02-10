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
  const onClickPickerExit = () => setIsDisplay(false);

  return (
    <PickerContainer isDisplay={isDisplay}>
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
