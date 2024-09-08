import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Avatar, Container } from '@mui/material';
import Image from 'next/image';
import SIHHomePage from './SIHHomePage';
import SIHCollegeList from './SIHCollegeList';
import SIHDashboardOverview from './SIHDashboardOverview';
import styles from '../css/SIHStyles.module.css';

export default function SIHMainPage() {
  const [pageName, setPageName] = useState('HomePage');

  const showPage = (page) => {
    setPageName(page);
  };

  let mainBodyPage;
  switch (pageName) {
    case 'HomePage':
      mainBodyPage = <SIHHomePage />;
      break;
    case 'CollegeList':
      mainBodyPage = <SIHCollegeList />;
      break;
    case 'DashboardOverview':
      mainBodyPage = <SIHDashboardOverview />;
      break;
    default:
      mainBodyPage = <SIHHomePage />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src="/images/logoipsum.svg" alt="Company Logo" width={130} height={80} />
          </Typography>
          <Button
            className={pageName === 'HomePage' ? styles.orangeButton : styles.whiteButton}
            onClick={() => showPage('HomePage')}
          >
            Home
          </Button>
          <Button
            className={pageName === 'CollegeList' ? styles.orangeButton : styles.whiteButton}
            onClick={() => showPage('CollegeList')}
          >
            Colleges
          </Button>
          <Button
            className={pageName === 'DashboardOverview' ? styles.orangeButton : styles.whiteButton}
            onClick={() => showPage('DashboardOverview')}
          >
            Dashboard Overview
          </Button>
          <Avatar alt="User" src="/images/user-avatar.png" />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {mainBodyPage}
      </Container>
    </Box>
  );
}