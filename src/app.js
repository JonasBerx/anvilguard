require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./strategies/discordstrategy');
const db = require('./database/database')

db.then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));

// Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

app.use(session({
    secret: "anvilguardsecret",
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    name: 'discord.oauth2'
}));

app.use(passport.initialize());
app.use(passport.session());

// Middleware routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
});