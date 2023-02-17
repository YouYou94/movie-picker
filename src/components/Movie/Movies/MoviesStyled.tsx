import styled from 'styled-components';
import Prev from '../../../assets/image/leftarrow.png';
import Next from '../../../assets/image/rightarrow.png';

export const Layout = styled.section`
  position: relative;

  width: 85rem;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 8rem;
  margin-right: 8rem;
  border-bottom: 2px solid rgb(204, 204, 204);

  overflow: hidden;

  gap: 1rem;
`;

export const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.7rem;

  background-color: rgb(17, 17, 17);

  transition: all 0.5s ease-in-out;
`;

export const MoviesBox = styled.div`
  height: 400px;

  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Dosis';
  font-size: 2rem;

  color: rgb(17, 17, 17);
`;

export const MoviePoster = styled.div<{ poster?: string }>`
  flex-shrink: 0;

  width: 240px;
  height: 360px;

  background-image: url(${(prop) => prop.poster});
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0 1rem;
  border-radius: 0.7rem;

  box-shadow: 1px 1px 10px 1px rgb(245, 245, 245);

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    transform: scale(105%, 105%);
  }
`;

export const PrevButton = styled.button`
  position: absolute;

  left: 0.2rem;

  width: 2rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1rem;

  color: white;

  background-color: rgb(255, 255, 255, 0.5);

  z-index: 1;

  :hover {
    background-color: rgb(255, 255, 255);
  }
`;

export const NextButton = styled.button`
  position: absolute;

  right: 0.2rem;

  width: 2rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1rem;

  color: white;

  background-color: rgb(255, 255, 255, 0.3);

  z-index: 1;

  :hover {
    background-color: rgb(255, 255, 255, 0.8);
  }
`;

export const PrevImage = styled.img.attrs({
  src: `${Prev}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;

export const NextImage = styled.img.attrs({
  src: `${Next}`,
})`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;
