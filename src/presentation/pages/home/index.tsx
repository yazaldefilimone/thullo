import { Header } from '@/presentation/components/Header';
import { FunctionComponent, ReactNode } from 'react';

import { HomeContainer } from './styles';

interface HomeProps {
  children?: ReactNode;
}

export const Home: FunctionComponent<HomeProps> = () => {
  return (
    <HomeContainer>
      <Header />
      <h1>Home</h1>
    </HomeContainer>
  );
};
