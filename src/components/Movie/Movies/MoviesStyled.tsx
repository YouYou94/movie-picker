import styled from 'styled-components';

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

export const MoviePoster = styled.div<{ poster?: string }>`
  width: 240px;
  height: 360px;

  background-image: url(${(prop) => prop.poster});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0.7rem;
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
  height: 500px;

  display: flex;
  flex-direction: column;

  padding: 2rem 5rem;

  box-shadow: 0px 100px 50px 0px rgb(17, 17, 17, 0.2),
    0px -40px 50px 0px rgb(17, 17, 17, 0.2);

  gap: 1rem;
`;

export const Title = styled.h2`
  font-family: 'Dosis';

  color: rgb(242, 242, 242);
`;

export const CarouselBox = styled.div``;
