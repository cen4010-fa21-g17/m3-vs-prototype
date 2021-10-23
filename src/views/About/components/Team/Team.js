import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    name: 'Laura Casals',
    title: 'Frontend Developer',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5685b058a976af7af993efc6/1634846753756-LM289OT1BBMDVKFKTUW8/4.jpg',
  },
  {
    name: 'Ignacio Albornoz',
    title: 'Backend Developer',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5685b058a976af7af993efc6/1634846753011-80KN7XTGVZY87QW2L1T1/1.jpg',
  },
  {
    name: 'Carlos Fonseca',
    title: 'Backend Developer',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5685b058a976af7af993efc6/1634846753688-YL915J0G2E6CVSACGUPM/3.jpg',
  },
  {
    name: 'Thiago Vasconcelos',
    title: 'Backend Developer',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5685b058a976af7af993efc6/1634846753123-SUGQ2AKRIABWIQ3ZB4U9/2.jpg',
  },
  {
    name: 'David Moore',
    title: 'Frontend Developer',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5685b058a976af7af993efc6/1634846754229-D8T69Q2XFAGUZ94VD7S5/5.jpg',
  },
];

const Team = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Small team. Big hearts.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar sx={{ marginRight: 3 }}>
                    <Avatar
                      src={item.avatar}
                      variant={'rounded'}
                      sx={{ width: 100, height: 100, borderRadius: 3 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
