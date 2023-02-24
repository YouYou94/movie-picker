import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  Footer,
  Header,
  Loading,
  Movies,
  PageTemplate,
  Picker,
  SearchBar,
  Trailer,
} from '../../components';
import { POPULAR, UPCOMING } from '../../Constants';
import useAxios from '../../hooks/useAxios';
import { pickerState } from '../../recoil/atom';

const HomeContainer = () => {
  const navigate = useNavigate();

  const { popularMovies, popularError, popularLoading } = useAxios({
    type: POPULAR,
  });

  const { upcomingMovies, upcomingError, upcomingLoading } = useAxios({
    type: UPCOMING,
  });

  const onClickMovie = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  /* Search */
  const [keyword, setKeyword] = useState<string>('');

  /* Picker */
  const [picker, setPicker] = useRecoilState(pickerState);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const onClickMenu = () => setIsDisplay(true);

  useEffect(() => {
    if (popularError) alert(popularError);
  }, [popularError]);

  useEffect(() => {
    if (upcomingError) alert(upcomingError);
  }, [upcomingError]);

  return (
    <PageTemplate>
      {isDisplay ? (
        <Picker
          picker={picker}
          isDisplay={isDisplay}
          setIsDisplay={setIsDisplay}
        />
      ) : (
        <></>
      )}
      <Header onHandleClick={onClickMenu} />
      <Trailer />
      <SearchBar state={keyword} setState={setKeyword} />
      {popularLoading ? (
        <Loading />
      ) : (
        <Movies
          type={POPULAR}
          movies={popularMovies}
          onHandleClick={onClickMovie}
        />
      )}
      {upcomingLoading ? (
        <Loading />
      ) : (
        <Movies
          type={UPCOMING}
          movies={upcomingMovies}
          onHandleClick={onClickMovie}
        />
      )}
      <Footer />
    </PageTemplate>
  );
};

export default HomeContainer;
