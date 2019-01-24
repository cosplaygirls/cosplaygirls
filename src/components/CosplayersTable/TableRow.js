import React, { memo } from 'react';
import { TableDataSimple } from './TableDataSimple.js';
import { TableDataSocial } from './TableDataSocial.js';

import instagramIcon from '../../icons/instagram.svg';
import patreonIcon from '../../icons/patreon.svg';
import redditIcon from '../../icons/reddit.svg';
import twitterIcon from '../../icons/twitter.svg';
import facebookIcon from '../../icons/facebook.svg';
import vkIcon from '../../icons/vk.svg';
import websiteIcon from '../../icons/website.svg';

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
        icon={instagramIcon}
        text={instagram}
        url={`${socialsTypes.instagram}${instagram}`}
      />
      <TableDataSocial
        icon={patreonIcon}
        text={patreon}
        url={`${socialsTypes.patreon}${patreon}`}
      />
      <TableDataSocial
        icon={redditIcon}
        text={reddit}
        url={`${socialsTypes.reddit}${reddit}`}
      />
      <TableDataSocial
        icon={twitterIcon}
        text={twitter}
        url={`${socialsTypes.twitter}${twitter}`}
      />
      <TableDataSocial
        icon={facebookIcon}
        text={facebook}
        url={`${socialsTypes.facebook}${facebook}`}
      />
      <TableDataSocial
        icon={vkIcon}
        text={vk}
        url={`${socialsTypes.vk}${vk}`}
      />
      <TableDataSocial
        icon={websiteIcon}
        text={website}
        url={`${socialsTypes.website}${website}`}
      />
    </tr>
  );
});

// CC0-1.0 https://github.com/simple-icons/simple-icons
// MIT https://github.com/feathericons/feather
