import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
 
const Footer = () => (
  <Stack mt="60px" bgcolor="#FFF3F4" flexWrap="wrap">
    <Stack gap="30px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '85px', margin: '0px 20px' }} />
    </Link>
    </Stack>
    <Typography variant="h7"sx={{ fontSize: { lg: '25px', xs: '18px' } }} mt="20px" textAlign="center" pb="40px">Made by Larry </Typography>
    
  </Stack>
);

export default Footer;