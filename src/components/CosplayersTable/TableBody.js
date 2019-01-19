import React, { memo } from 'react';
import { TableRow } from './TableRow.js';

export const TableBody = memo(({ cosplaygirls, socialsTypes }) => (
  <tbody>
    {cosplaygirls.map(cosplayer => (
      <TableRow
        key={cosplayer.nickname}
        cosplayer={cosplayer}
        socialsTypes={socialsTypes}
      />
    ))}
  </tbody>
));
