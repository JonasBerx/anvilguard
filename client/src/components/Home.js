import React, { Component } from "react";
import axios from 'axios'
import Cookies from 'js-cookie';
import { Grid, Typography } from "@mui/material";
import LifeCraft from '../assets/fonts/LifeCraft_Font.ttf';
import Dwarven from '../assets/fonts/Dwarven.ttf';
import { Box } from "@mui/system";

import Banner from '../assets/background.png'




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      token: Cookies.get('discord.oauth2')
    };
  }

  // callAPI() {
  //   fetch("https://discordapp.com/api/users/@me")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }))
  //     .catch(err => err);
  // }

  componentDidMount() {
    // this.fetchUser();
  }

  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Box
            component="img"
            alt="Your logo."
            width='100%'
            height='400px'
            src={Banner}
            zIndex='-10'
          />
          <Grid item xs={3.5}></Grid>
          <Grid item xs={5} sx={{ bgcolor: '#4e342e', height: 1, boxShadow: 3, color: 'white', zIndex: '5' }}>
            <Typography align="center" variant="h2" sx={{ fontFamily: 'LifeCraft' }}>
              The Anvilguard
            </Typography>
            <Box sx={{ px: 20 }}>
              <Typography align="center" variant="h6" sx={{ fontFamily: 'Dwarven' }}>
                Welcome to the Anvilguard Official website.
              </Typography>
            </Box>

          </Grid>
          <Grid item xs={3.5}></Grid>

        </Grid>
      </>
    )
  }
}

export default Home;
