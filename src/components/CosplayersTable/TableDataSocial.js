import React, { memo } from 'react';

export const TableDataSocial = memo(({ text, url }) => (
  <td>{text && <a href={url}>{text}</a>}</td>
));
