import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Cookies from 'js-cookie';
import Image from '../../assets/anvilguard.png'; // Import using relative path
import ButtonImg from '../../assets/blank_button.png'; // Import using relative path
import LifeCraft from '../../assets/fonts/LifeCraft_Font.ttf';
import { useState, useEffect } from 'react';

import { makeStyles, withStyles } from "@material-ui/styles";



const useStyles = makeStyles({
  buttonStep: {
    width: "200px",
    height: "50px",
    backgroundImage: `url(${ButtonImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  }
});

const menuOptions1 =
  [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "News", to: "/news" },
    { title: "PVP", to: "/pvp" },
    { title: "Login/Logout", to: "/login" }
  ]

const menuOptions2 =
  [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "News", to: "/news" },
    { title: "PVP", to: "/pvp" },
    { title: "Login", to: "/login" }
  ]






const ButtonAppBar = () => {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#4e342e' }}>
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Your logo."
              src={Image}
            />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontFamily: 'LifeCraft' }}>
            The Anvilguard
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>

            {menuOptions1.map(({ title, to }, index) => (
              <Button
                className={classes.buttonStep}
                key={`menu_item_btn_${index}`}
                component={Link}
                to={to}
                sx={{
                  fontFamily: 'LifeCraft',
                  my: 2,
                  color: 'white',
                  fontSize: 20,
                }}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
export default withStyles(useStyles)(ButtonAppBar)
