import Board from '@/presentation/components/Board';
import { Header } from '@/presentation/components/Header';
import Nave from '@/presentation/components/Nave';
import React, { FunctionComponent } from 'react';

export const Home: FunctionComponent = () => {
  return (
    <article>
      <Header />
      <main className="container">
        <Nave />
        <Board />
      </main>
    </article>
  );
};
