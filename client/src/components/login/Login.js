import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import GoogleLoginHook from './GoogleLoginHook';
import Image from '../../assets/anvilguard.png'; // Import using relative path
import '../../assets/output.css'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import paths from '../../router/paths';
import { redirect, useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import ButtonImg from '../../assets/blank_button.png'; // Import using relative path
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={"/"}>
        Money Management
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles({
  buttonStep: {
    width: "200px",
    height: "100px",
    backgroundImage: `url(${ButtonImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

const Login = (props) => {
  const classes = useStyles();
  const { history } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  let navigate = useNavigate();
  const oauth_redirect = () => {
    window.location.href = 'http://localhost:3000/auth';
  }


  return (
    <Container component="main" maxWidth="xs" sx={{
      bgcolor: '#4e342e',
      height: 1,
      boxShadow: 10,
      borderRadius: 2,
      zIndex: '5',
      color: 'white'
    }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',


        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
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
        <Typography component="h1" variant="h5" sx={{ margin: 2 }}>
          Sign in through Discord
        </Typography>
        <Box>
          <Button
            type="submit"
            component={Link}
            onClick={oauth_redirect}
            variant="contained"
          >
            <FontAwesomeIcon icon={faDiscord} /> <Typography sx={{ margin: 0.5 }}>Login with Discord</Typography>
          </Button>
        </Box>
        <br />

        <Typography component="h1" variant="h5">
          Or via email
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            color="warning"
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              style: {
                color: '#fff'
              }
            }}
          />
          <TextField
            color="warning"
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{
              style: {
                color: '#fff'
              }
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.buttonStep}
            component={Link}
            type="submit"
            fullWidth
            sx={{
              fontFamily: 'LifeCraft',
              my: 1,
              color: 'white',
              fontSize: 30,
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container >
  );
}

export default Login
