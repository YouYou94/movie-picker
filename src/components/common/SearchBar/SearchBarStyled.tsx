import styled from 'styled-components';
import Search from '../../../assets/image/search.png';

export const SearchLayout = styled.div`
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 50rem;
  height: 3rem;

  display: flex;
  align-items: center;

  border-radius: 5rem;
  padding: 0 1rem;

  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 1254px) {
    width: 40rem;
  }

  @media screen and (max-width: 768px) {
    width: 34rem;
  }

  @media screen and (max-width: 560px) {
    width: 28rem;
  }

  @media screen and (max-width: 480px) {
    width: 22rem;
  }
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  padding-left: 1rem;

  background-color: transparent;

  font-size: 1.1rem;

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
    background-color: rgb(31, 41, 55, 0.1);
  }
`;

export const SearchImage = styled.img.attrs({
  src: `${Search}`,
})`
  width: 1.5rem;
  height: 1.5rem;
`;
