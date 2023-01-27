import { Loading } from '../index';
import * as Styled from './ResultStyled';

type ResultProps = {
  loading: boolean;
};

const ResultPresenter = ({ loading }: ResultProps) => {
  return (
    <Styled.Layout>
      {loading ? (
        <Loading />
      ) : (
        <Styled.CarouselContainer>여긴 캐러셀</Styled.CarouselContainer>
      )}
    </Styled.Layout>
  );
};

export default ResultPresenter;
