import { ReactElement } from 'react';
import { Container } from './LayoutStyled';

type LayoutProps = {
  children: ReactElement<any, any>;
};

export const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};
