import styled from 'styled-components';
import Exit from '../../assets/image/exit.png';

export const PickerContainer = styled.div<{ isDisplay?: boolean }>`
  position: absolute;

  display: ${(prop) => (prop.isDisplay ? 'flex' : 'none')};

  right: 0;

  width: 20rem;
  height: 100%;

  flex-direction: column;

  background-color: rgb(11, 43, 64);

  z-index: 2;

  gap: 1rem;
`;

export const PickerHeader = styled.div`
  height: 5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 1rem;
`;

export const ExitImage = styled.img.attrs({
  src: `${Exit}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;

export const PickerList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const PickerItem = styled.li`
  height: 6rem;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  color: white;

  gap: 1rem;
`;

export const PosterBox = styled.div`
  width: 4rem;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PosterImg = styled.img`
  width: 100%;

  border-radius: 0.7rem;
`;

export const PickerMovieTitle = styled.label`
  flex: 1;
`;
