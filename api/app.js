require('dotenv').config();

var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
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
const articleRoute = require('./routes/articles');
const homeRoute = require('./routes/home');

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(cors)
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware routes
app.use('/', homeRoute)
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);
app.use('/article', articleRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
