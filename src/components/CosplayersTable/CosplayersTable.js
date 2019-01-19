import React from 'react';
import styles from './CosplayersTable.module.scss';
import { TableHead } from './TableHead.js';
import { TableBody } from './TableBody.js';

export const CosplayersTable = React.memo(
  ({ cosplaygirls, fields, socialsTypes }) => (
    <table className={styles.cpgTabel}>
      <TableHead fields={fields} />
      <TableBody cosplaygirls={cosplaygirls} socialsTypes={socialsTypes} />
    </table>
  )
);
