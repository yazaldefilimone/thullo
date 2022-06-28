import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';
import Do from '@/shared/assets/do.jpg';
import photo from '@/shared/assets/photo.jpg';

export const Card: FunctionComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={Do} alt="" />
      </div>
      <p className={styles.description}>✋🏿 Add what you'd like to work on below</p>
      <div className={styles.tag}>
        <span>frontend</span>
        <span>backend</span>
        <span>ui</span>
      </div>
      <div className={styles.content}>
        <ul className={styles.user__content}>
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

        <div className={styles.presenta}>
          <span>
            <i className="ri-message-3-line"></i> 2
          </span>
          <span>
            <i className="ri-attachment-line"></i> 10
          </span>
        </div>
      </div>
    </div>
  );
};
