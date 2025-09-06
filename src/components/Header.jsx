import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Code as CodeIcon } from '@mui/icons-material';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { toggleMobileMenu, setCurrentSection } from '../store/slices/uiSlice';

const navigationItems = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'What We Do', section: 'services' },
  { label: 'What We Think', section: 'insights' },
  { label: 'Careers', section: 'careers' },
  { label: 'Contact', section: 'contact' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const { mobileMenuOpen, currentSection } = useAppSelector((state) => state.ui);

  const handleSectionClick = (section) => {
    dispatch(setCurrentSection(section));
    if (mobileMenuOpen) {
      dispatch(toggleMobileMenu());
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => dispatch(toggleMobileMenu())}
    >
      <Box sx={{ width: 250, mt: 8 }}>
        <List>
          {navigationItems.map((item) => (
            <ListItem
              key={item.section}
              onClick={() => handleSectionClick(item.section)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1e3a8a' }}>
        <Toolbar>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
            onClick={() => handleSectionClick('home')}
            style={{ cursor: 'pointer' }}
          >
            AlphaWave Software
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.section}
                  color="inherit"
                  onClick={() => handleSectionClick(item.section)}
                  sx={{
                    fontWeight:
                      currentSection === item.section ? 'bold' : 'normal',
                    borderBottom:
                      currentSection === item.section
                        ? '2px solid white'
                        : 'none',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </>
  );
};

export default Header;
