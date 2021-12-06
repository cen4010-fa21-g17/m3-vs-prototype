import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          fontWeight={700}
          variant={'h5'}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Basics'}
          items={[
            {
              title: 'Is this a subscription service?',
              subtitle:
                'No, this is not a subscription service. It is required to make an account to have access to all of the sevices, otherwise it is free to use.',
            },
            {
              title: 'Do I have to make an account?',
              subtitle:
                'Yes. To have access to the services you must create an account.',
            },
            {
              title: 'Where can I get help?',
              subtitle:
                'You can visit our help center if your question was not answered on the FAQ page',
            },
            {
              title: 'What is MetaSpace?',
              subtitle:
                'MetaSpace goes against the grain by providing a place not simply to build a profile of posted credentials and a friends list of references, but to provide a means to formulate job-relevant vision and action',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Account & settings'}
          items={[
            {
              title: 'How do I update my Biography and Goals?',
              subtitle:
                'On your profile page you can click on the icon next to the item you want to edit',
            },
            {
              title: 'How do I change my profile picture?',
              subtitle:
                'There is an icon next to the profile picture that allows you to upload a photo',
            },
            {
              title: 'How do add or remove an experience?',
              subtitle:
                'Clicking on the "add experience" button on your journey workspace will redirect to a page where you can add your information. Once you added an experience you can return to your workspace and modify or delete the experience.',
            },
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Security'}
          items={[
            {
              title: 'How do I reset my password?',
              subtitle:
                'Go to your account settings and in security you will be given the option to enter your preferred password',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
