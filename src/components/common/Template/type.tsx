import { ReactElement } from 'react';

export interface TemplateInterface {
  header?: ReactElement;
  children: ReactElement[] | ReactElement;
  footer?: ReactElement;
  isMargin?: boolean;
}
