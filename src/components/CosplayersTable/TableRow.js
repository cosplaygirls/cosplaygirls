import React, { memo } from 'react';
import { TableDataSimple } from './TableDataSimple.js';
import { TableDataSocial } from './TableDataSocial.js';

export const TableRow = memo(({ cosplayer, socialsTypes }) => {
  const {
    origin,
    nickname,
    name,
    instagram,
    patreon,
    reddit,
    twitter,
    facebook,
    website,
    vk,
  } = cosplayer;

  return (
    <tr>
      <TableDataSimple text={origin} />
      <TableDataSimple text={nickname} />
      <TableDataSimple text={name} />
      <TableDataSocial
        text={instagram}
        url={`${socialsTypes.instagram}${instagram}`}
      />
      <TableDataSocial
        text={patreon}
        url={`${socialsTypes.patreon}${patreon}`}
      />
      <TableDataSocial text={reddit} url={`${socialsTypes.reddit}${reddit}`} />
      <TableDataSocial
        text={twitter}
        url={`${socialsTypes.twitter}${twitter}`}
      />
      <TableDataSocial
        text={facebook}
        url={`${socialsTypes.facebook}${facebook}`}
      />
      <TableDataSocial text={vk} url={`${socialsTypes.vk}${vk}`} />
      <TableDataSocial
        text={website}
        url={`${socialsTypes.website}${website}`}
      />
    </tr>
  );
});
