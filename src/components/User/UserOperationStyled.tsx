import styled from 'styled-components';
import Back from '../../assets/image/back.png';
import Hamberger from '../../assets/image/hamberger.png';

export const OperationBox = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  z-index: 1;
`;

export const ButtonBox = styled.button`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  color: white;

  background-color: transparent;
`;

export const BackImage = styled.img.attrs({
  src: `${Back}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;

export const HambergerImage = styled.img.attrs({
  src: `${Hamberger}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;
