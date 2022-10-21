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
      username: "",
      discordid: "",
      token: Cookies.get('discord.oauth2')
    };
  }

  collectDiscordData() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const username = urlSearchParams.get('username');
    const discordid = urlSearchParams.get('discordid');
    if (username && discordid) {

      Cookies.set('username', username);
      Cookies.set('discordid', discordid);

      this.setState({ username: username })
      this.setState({ discordid: discordid })
    }
    else {
      this.setState({ username: Cookies.get('username') })
      this.setState({ discordid: Cookies.get('discordid') })
    }

  }

  componentDidMount() {
    this.collectDiscordData()
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
              <Typography align="center" variant="h6" sx={{ fontFamily: 'Dwarven' }}>
                {this.state.username} {this.state.discordid}
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
