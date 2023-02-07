import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/moviepicker" />} />
        <Route path="/moviepicker/*" element={<Home />}>
          {/* 인기 영화 및 최신 영화 */}
          {/* 검색 영화 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

/*
페이지 라우터 설정

/* : 해당하는 라우트가 없을 시 전부 /moviepicker url로 이동

/moviepicker
- 메인 홈 url
- 필요 컴포넌트 : moviepicker 타이틀 및 검색창 / 최신 영화 및 인기 영화

/moviepicker/search/:id
- 검색 영화
- id에는 제목이 들어간다
- 헤더 (왼쪽: 타이틀 / 중앙 : 검색창 / 오른쪽 : 메뉴)
- 섹션 : 검색 내용들 (어떤식으로 표현할까? 캐러셀? 아니면 무한스크롤?)

/moviepicker/movie/:id
- 검색한 영화 중 하나를 클릭 시 해당하는 영화를 보여준다
- id에는 제목 또는 해당 영화의 id가 들어간다
- 헤더 (위와 동일)
- 섹션 : 해당 영화의 디테일 정보

그렇다면 페이지는 총 3개
*/
