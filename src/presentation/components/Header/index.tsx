import { FunctionComponent, ReactNode } from 'react';

import styles from './styles.module.scss';
import logo from '@/shared/assets/Logo.svg';
import photo from '@/shared/assets/photo.jpg';

interface HeaderProps {
  children?: ReactNode;
}
export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className={styles.first__container}>
        <span>Devchallenges Board</span>
        <span className={styles.separate}></span>
        <button>All board</button>
      </div>

      <div className={styles.side__left}>
        <div className={styles.left__container}>
          <input type="text" placeholder="Keyword..." />
          <button>Search</button>
        </div>

        <div className={styles.profile}>
          <div className={styles.profile__bg}>
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
