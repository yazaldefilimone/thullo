import { FunctionComponent, ReactNode } from 'react';
import { Card } from '../Card';
import styles from './styles.module.scss';

interface BoardColumnProps {
  children?: ReactNode;
  name: string;
}

export const BoardColumn: FunctionComponent<BoardColumnProps> = ({ name }) => {
  return (
    <section className={styles.column}>
      <header className={styles.header}>
        <span>{name}</span>

        <button>
          <i className="ri-more-fill"></i>
        </button>
      </header>
      <div className={styles.cards}>
        <Card />
      </div>
    </section>
  );
};
