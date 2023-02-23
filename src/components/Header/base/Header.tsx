import { useNavigate } from 'react-router';
import {
  Layout,
  Title,
  Emphasis,
  NavBox,
  Nav,
  MenuBox,
  MenuImage,
} from './HeaderStyled';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Title onClick={() => navigate('/moviepicker')}>
        <Emphasis>M</Emphasis>
        {` `}
        OVIE
        <Emphasis>P</Emphasis>
        {` `}
        ICKER
      </Title>
      <NavBox>
        <Nav></Nav>
      </NavBox>
      <MenuBox>
        <MenuImage alt="메뉴 이미지" />
      </MenuBox>
    </Layout>
  );
};
