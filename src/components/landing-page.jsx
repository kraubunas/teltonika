import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navigation/index.jsx';

const LandingPage = () => (
    <>
    <NavBar />
    <Box component="main">
        <Outlet/>
    </Box>
    </>
);

export default LandingPage;
