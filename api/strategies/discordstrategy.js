const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport')
const DiscordUser = require('../models/DiscordUser')

const scopes = ['identify', 'email', 'guilds'];

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await DiscordUser.findById(id)
    if (user) {
        done(null, user)
    }
})

passport.use(new DiscordStrategy({
    clientID: process.env.client_ID,
    clientSecret: process.env.client_Secret,
    callbackURL: process.env.callback_URL,
    scope: scopes
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(accessToken);
        const user = await DiscordUser.findOne({ discordId: profile.id });
        if (user) {
            done(null, user)
        }
        else {
            const newUser = await DiscordUser.create({
                discordId: profile.id,
                username: profile.username
            });
            const savedUser = await newUser.save();
            done(null, savedUser)
        }
    } catch (error) {
        console.log(error);
        done(error, null)

    }
}))
