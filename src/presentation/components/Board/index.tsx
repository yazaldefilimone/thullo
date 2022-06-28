import { FunctionComponent, ReactNode } from 'react';
import { BoardColumn } from '../BoardColumn';

import styles from './styles.module.scss';

interface BoardProps {
  children?: ReactNode;
}

const Board: FunctionComponent<BoardProps> = () => {
  const columns = [
    {
      title: 'Backlog 🤔',
    },
    {
      title: 'In Progress 📚',
    },
    {
      title: 'In Review ⚙️',
    },
    {
      title: 'Completed 🙌🏽',
    },
  ];
  return (
    <article className={styles.board}>
      {columns.map(({ title }) => (
        <BoardColumn name={title} />
      ))}
    </article>
  );
};

export default Board;
