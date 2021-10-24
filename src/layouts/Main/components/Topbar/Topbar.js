import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem, SearchBar } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    abouts: aboutPages,
    supports: supportPages
  } = pages;

  return (
    // Page Content Container
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      {/* Site Logo Container */}
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="metaspace"
        width={{ xs: 100, md: 120 }}
      >
        {/*  Site Logo */}
        <Box
          component={'img'}
          src={
            (mode === 'light' && !colorInvert)
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
        {/*  END site logo */}
        {/*  Search Bar */}
      </Box>
      {/*  END site logo container */}

      {/*  Search Bar */}
      <Box>
        <SearchBar />
      </Box>

      {/*  Site Navigation */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem
            title={'About'}
            id={'about-page'}
            items={aboutPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Support'}
            id={'support-page'}
            items={supportPages}
            colorInvert={colorInvert}
          />
        </Box>
        {/* Signup Button */}
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/signup-simple"
            size="large"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      {/*  END site navigation */}
      {/*  Alternate Navigation on smaller displays */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
