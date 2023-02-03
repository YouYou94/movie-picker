import styled from 'styled-components';

export const DetailContainer = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1rem 5rem;

  gap: 2rem;
`;

export const BackdropImg = styled.img`
  position: absolute;

  width: 100vw;
  height: 100vh;

  filter: opacity(30%);

  z-index: 0;
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  display: flex;

  color: white;

  gap: 2rem;

  z-index: 1;
`;

export const PosterBox = styled.div`
  width: 18rem;
  height: 27rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PosterImg = styled.img`
  width: 100%;

  border-radius: 0.7rem;
`;

export const OverviewContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;
`;

export const OverviewBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const MovieTitle = styled.h1``;

export const MovieTagline = styled.h2``;

export const OverviewLabel = styled.label``;

export const PickerBox = styled.div`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PickerButton = styled.button`
  width: 20rem;
  height: 3rem;

  border: none;
  border-radius: 0.8rem;

  font-size: 1.2rem;

  color: white;
  background-color: rgb(48, 165, 191);

  :hover {
    background-color: rgb(48, 191, 148);
  }
`;

export const Line = styled.div`
  border-top: 1px solid white;
`;

export const EtcContainer = styled.div`
  flex: 1;

  display: flex;

  z-index: 1;
`;
