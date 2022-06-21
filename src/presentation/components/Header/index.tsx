import { FunctionComponent, ReactNode } from 'react';

import { HeaderContainer } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
};
