import * as Styled from './Styled';

export default function Header() {
  return (
    <Styled.HeaderLayout>
      <Styled.HeaderBox>
        <Styled.HeaderTitleBox>
          <Styled.HeaderTitle>나홀로티비쇼</Styled.HeaderTitle>
        </Styled.HeaderTitleBox>
        <Styled.HeaderNavBox>헤더 네비</Styled.HeaderNavBox>
        <Styled.HeaderSearchBox>헤더 서치</Styled.HeaderSearchBox>
      </Styled.HeaderBox>
    </Styled.HeaderLayout>
  );
}
