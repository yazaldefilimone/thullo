import { FunctionComponent, ReactNode } from 'react';
import photo from '@/shared/assets/photo.jpg';

import styles from './styles.module.scss';

interface NaveProps {
  children?: ReactNode;
}

const Nave: FunctionComponent<NaveProps> = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <button>Private</button>
        <div className={styles.user__container}>
          <ul>
            <li>
              <div className={styles.user}>
                <img src={photo} alt="" />
              </div>
            </li>
            <li>
              <div className={styles.user}>
                <img src={photo} alt="" />
              </div>
            </li>
          </ul>
          <button>+</button>
        </div>
      </div>

      <div className={styles.menu}>
        <button>
          <i className="ri-more-fill"></i>
          Show Menu
        </button>
      </div>
    </nav>
  );
};

export default Nave;
