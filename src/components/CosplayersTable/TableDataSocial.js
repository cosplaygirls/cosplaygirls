import React, { memo } from 'react';

export const TableDataSocial = memo(({ text, url }) => (
  <td>
    {text && (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )}
  </td>
));
