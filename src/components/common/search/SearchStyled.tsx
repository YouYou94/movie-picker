import styled from 'styled-components';
import Search from '../../../assets/image/search.png';

export const SearchLayout = styled.div`
  position: fixed;

  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid rgb(245, 245, 245);

  background-color: rgb(11, 43, 64);

  z-index: 2;
`;

export const SearchBox = styled.div`
  width: 40rem;
  height: 3rem;

  display: flex;
  align-items: center;

  border-radius: 5rem;
  padding: 0 1rem;

  background-color: rgb(255, 255, 255);
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;

  background-color: transparent;

  font-size: 1rem;

  outline: none;
`;

export const SearchButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  background-color: transparent;

  :hover {
    background-color: rgb(48, 165, 191, 0.2);
  }
`;

export const SearchImage = styled.img.attrs({
  src: `${Search}`,
})`
  width: 1.5rem;
  height: 1.5rem;
`;
