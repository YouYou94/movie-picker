import styled from 'styled-components';
import Prev from '../../../assets/image/leftarrow.png';
import Next from '../../../assets/image/rightarrow.png';

export const MoviesLayout = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  padding: 0rem 5rem;

  gap: 2rem;

  @media screen and (max-width: 1680px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1254px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    padding: 0rem 3rem;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);

    padding: 0rem 2rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MovieCaption = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: none;

  border-radius: 1rem;
  padding: 2rem;

  color: white;

  font-size: 0.8rem;

  background-color: rgb(45, 45, 45, 0.8);
`;

export const MovieBox = styled.article`
  position: relative;

  aspect-ratio: 2 / 3;

  display: flex;
  flex-direction: column;

  border-radius: 1rem;

  transition: 0.5s all;

  cursor: pointer;

  :hover {
    transform: scale(105%, 105%);
  }

  :hover {
    ${MovieCaption} {
      display: flex;
      flex-direction: column;

      gap: 0.8rem;
    }
  }
`;

export const MovieTitle = styled.h2``;

export const MovieReleaseDate = styled.label`
  cursor: pointer;
`;

export const MovieOverview = styled.label`
  text-overflow: ellipsis;

  cursor: pointer;
`;

export const Layout = styled.section`
  position: relative;

  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 5rem;
  margin-right: 5rem;
  border-bottom: 2px solid rgb(204, 204, 204);

  overflow: hidden;

  gap: 1rem;
`;

export const CarouselBox = styled.div`
  width: 500%;

  display: flex;
  flex-direction: column;

  transition: all 0.5s ease-in-out;
`;

// 16.7%씩

export const MoviesBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const Title = styled.h2`
  font-family: 'Dosis';
  font-size: 2rem;

  color: rgb(17, 17, 17);
`;

export const MoviePoster = styled.div<{ poster?: string }>`
  width: 240px;
  height: 360px;

  background-image: url(${(prop) => prop.poster});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0.7rem;
`;

export const PrevButton = styled.button`
  position: absolute;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  color: white;

  background-color: rgb(255, 255, 255, 0.3);

  z-index: 1;

  :hover {
    background-color: rgb(255, 255, 255, 0.8);
  }
`;

export const NextButton = styled.button`
  position: absolute;

  right: 0;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

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
