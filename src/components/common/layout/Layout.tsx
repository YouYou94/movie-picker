import { ReactElement } from 'react';
import { Container } from './LayoutStyled';

type LayoutProps = {
  children: ReactElement[];
};

export const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};
