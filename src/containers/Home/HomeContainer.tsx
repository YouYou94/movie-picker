import React, { useState } from 'react';
import { HomeNav, Template, Search } from '../../components';

const POPULAR = 'popular';
const RECENT = 'recent';

const HomeContainer = () => {
  /* Search 동작 */
  const [keyword, setKeyword] = useState('');

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setKeyword(value);
  };

  /* Nav 동작*/
  const [nowCursor, setNowCursor] = useState(POPULAR);

  const onClickPopular = () => setNowCursor(POPULAR);

  const onClickRecent = () => setNowCursor(RECENT);

  return (
    <Template>
      <Search state={keyword} onChangeHandler={onChangeSearchKeyword} />
      <HomeNav
        nowCursor={nowCursor}
        onClickPopular={onClickPopular}
        onClickRecent={onClickRecent}
      />
    </Template>
  );
};

export default HomeContainer;
