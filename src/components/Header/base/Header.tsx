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

type HeaderProps = {
  tabRef: any;
  onHandleClick: any;
};

export const Header = ({ tabRef, onHandleClick }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Layout ref={(el) => (tabRef.current[0] = el)}>
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
      <MenuBox onClick={onHandleClick}>
        <MenuImage alt="메뉴 이미지" />
      </MenuBox>
    </Layout>
  );
};
