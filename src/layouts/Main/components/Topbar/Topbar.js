import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem, SearchBar } from './components';
import { ThemeModeToggler } from '../../components';

import Container from 'components/Container';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    abouts: aboutPages,
    supports: supportPages,
    profiles: profilePages
  } = pages;

  const user = JSON.parse(window.localStorage.getItem('user'))

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
              ? 'https://static1.squarespace.com/static/61761f1d24a61e30e89a214c/t/61762b8cec8bf834944ae975/1635134348443/Logo_LightMode.png'
              : 'https://static1.squarespace.com/static/61761f1d24a61e30e89a214c/t/6176294b0d878d509435e3ce/1635133771670/Logo_DarkMode.png'
          }
          height={1}
          width={1}
        />
        {/*  END site logo */}

      </Box>
      {/*  Search Bar */}
      <Box>
        <SearchBar 
          style={{zIndex:1}}
        />
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
          { user ?
            
            <NavItem
            title={user.firstName + user.lastName}
            id={'profile-page'}
            items={profilePages}
            colorInvert={colorInvert}
          />
          :
          // Sign-up Button
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
          }
        </Box>
        {/* Theme mode toggle button: Light Mode or Dark Mode */}
        <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
          <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
            <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
              {/*  Dark/Light Mode Toggler */}
              <Box>
                <ThemeModeToggler />
              </Box>
            </Box>
          </Container>
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
  bgcolor: PropTypes.string,
};

export default Topbar;
