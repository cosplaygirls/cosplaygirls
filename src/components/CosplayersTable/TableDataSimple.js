import React, { memo } from 'react';

export const TableDataSimple = memo(({ text }) => <td>{text && text}</td>);
