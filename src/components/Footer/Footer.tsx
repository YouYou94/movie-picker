import {
  Layout,
  FooterTitleBox,
  FooterTitle,
  FooterMenuBox,
  MenuButton,
} from './FooterStyled';

type FooterType = {
  tabRef?: any;
};

export const Footer = ({ tabRef }: FooterType) => {
  return (
    <Layout>
      <FooterTitleBox>
        <FooterTitle>MOVIEPICKER</FooterTitle>
      </FooterTitleBox>
      <FooterMenuBox>
        <MenuButton
          onClick={() =>
            tabRef.current[0].scrollIntoView({ behavior: 'smooth' })
          }
        >
          Top
        </MenuButton>
        <MenuButton
          onClick={() =>
            tabRef.current[0].scrollIntoView({ behavior: 'smooth' })
          }
        >
          Search
        </MenuButton>
        <MenuButton
          onClick={() =>
            tabRef.current[1].scrollIntoView({ behavior: 'smooth' })
          }
        >
          Popular
        </MenuButton>
        <MenuButton
          onClick={() =>
            tabRef.current[2].scrollIntoView({ behavior: 'smooth' })
          }
        >
          Upcoming
        </MenuButton>
      </FooterMenuBox>
    </Layout>
  );
};
