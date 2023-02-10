import styled from 'styled-components';
import Exit from '../../assets/image/exit.png';

export const PickerContainer = styled.div<{ isDisplay?: boolean }>`
  position: absolute;

  display: ${(prop) => (prop.isDisplay ? 'flex' : 'none')};

  right: 0;

  width: 25rem;
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

  padding: 0 2rem;
  border-bottom: 3px solid rgb(204, 204, 204, 0.5);
`;

export const ExitImage = styled.img.attrs({
  src: `${Exit}`,
})`
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;
`;

export const PickerList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const PickerItem = styled.li`
  height: 7rem;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  color: white;

  gap: 1rem;

  cursor: pointer;

  :hover {
    background-color: rgb(224, 226, 233, 0.1);
  }
`;

export const PosterBox = styled.div`
  width: 4rem;
  height: 6rem;

  display: flex;
`;

export const PosterImg = styled.img`
  width: 100%;

  border-radius: 0.7rem;
`;

export const PickerMovieCaptionBox = styled.div`
  flex: 1;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CaptionLabel = styled.label`
  flex: 1;

  display: flex;
  align-items: center;
`;
