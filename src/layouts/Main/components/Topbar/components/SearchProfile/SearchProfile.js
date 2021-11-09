import React from "react";
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import profiles from './profiles-mock';

export default function SearchProfile() {
  return (
    <List
      sx={{
        width: 400,
        maxWidth: 400,
        bgcolor: 'Background.paper',
      }}
    >
        {profiles.map((profile) => (
          <Link href={profile.href}>
            <ListItem
            key={profile.id}
            >
              <ListItemAvatar>
                {profile.avatar}
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                noWrap
                >
                {profile.about}
              </Typography>
            </ListItem>
            <Divider />
          </Link>
        ))}
    </List>
  );
}

