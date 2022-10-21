import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove('username', { path: '/' })
    Cookies.remove('discordid', { path: '/' })
    Cookies.remove('discord.oauth2', { path: '/' })

    navigate("/", { replace: true });
    window.location.reload()

  }, []);

  return null;
}
export default LogOut
