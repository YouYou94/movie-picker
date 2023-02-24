import styled from 'styled-components';
import Back from '../../../assets/image/back.png';
import Hamberger from '../../../assets/image/hamberger.png';

export const HeaderLayout = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1;
`;

export const HeaderButton = styled.button`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  color: white;

  background-color: transparent;

  :hover {
    background-color: rgb(204, 204, 204, 0.2);
  }
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
  width: 1.8rem;
  height: 1.8rem;

  cursor: pointer;
`;
