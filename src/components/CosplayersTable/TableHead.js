import React, { memo } from 'react';
import { capitalize } from '../../util.js';

export const TableHead = memo(({ fields }) => {
  return (
    <thead>
      <tr>
        {fields.map(field => (
          <th key={field}>{capitalize(field)}</th>
        ))}
      </tr>
    </thead>
  );
});
