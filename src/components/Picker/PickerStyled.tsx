import styled from 'styled-components';
import Exit from '../../assets/image/exit.png';

export const PickerContainer = styled.div<{ isDisplay?: boolean }>`
  position: absolute;

  right: ${(prop) => (prop.isDisplay ? '0' : '-20rem')};

  width: 20rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: rgb(11, 43, 64);

  z-index: 2;

  transition: 0.5s all;

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
