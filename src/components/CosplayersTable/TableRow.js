import React, { memo } from 'react';
import { TableDataSimple } from './TableDataSimple.js';
import { TableDataSocial } from './TableDataSocial.js';

export const TableRow = memo(({ cosplayer, socialsTypes }) => {
  const { origin, nickname, name, socials } = cosplayer;
  return (
    <tr>
      <TableDataSimple text={origin} />
      <TableDataSimple text={nickname} />
      <TableDataSimple text={name} />
      {Object.keys(socialsTypes).map(type => {
        const index = socials.findIndex(social => social.type === type);
        const id = socials[index] && socials[index].id;
        const url = `${socialsTypes[type]}${id}`;
        return <TableDataSocial key={`${type}${id}`} text={id} url={url} />;
      })}
    </tr>
  );
});
