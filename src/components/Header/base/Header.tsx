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
  onHandleClick: any;
};

export const Header = ({ onHandleClick }: HeaderProps) => {
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
      <MenuBox onClick={onHandleClick}>
        <MenuImage alt="메뉴 이미지" />
      </MenuBox>
    </Layout>
  );
};
