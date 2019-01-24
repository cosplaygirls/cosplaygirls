import React, { memo } from 'react';
import styles from './TableDataSocial.module.scss';

export const TableDataSocial = memo(({ text, url, icon }) => (
  <td className={styles.center}>
    {text && (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.icon} src={icon} />
      </a>
    )}
  </td>
));
