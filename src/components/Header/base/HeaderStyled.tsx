import styled from 'styled-components';
import Hamberger from '../../../assets/image/hamberger.png';

export const Layout = styled.header`
  position: fixed;

  top: 0;

  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;

  background-color: rgb(17, 17, 17);

  z-index: 1;
`;

export const Title = styled.h1`
  font-family: 'Dosis';
  font-weight: 700;

  padding-left: 1.5rem;

  color: rgb(242, 242, 242);

  cursor: pointer;

  transition: 0.3s all;

  :hover {
    color: rgb(187, 208, 233);
  }
`;

export const Emphasis = styled.em`
  color: rgb(187, 208, 233);
`;

export const NavBox = styled.nav`
  flex: 1;

  display: flex;
`;

export const Nav = styled.ul``;

export const MenuBox = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: rgb(50, 50, 50);
  }
`;

export const MenuImage = styled.img.attrs({
  src: `${Hamberger}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;
