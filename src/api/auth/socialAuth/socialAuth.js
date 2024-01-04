const passport = require('passport');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const User = require('../models/userModel');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ 'google.id': profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const newUser = await new User({
                method: 'google',
                google: {
                    id: profile.id,
                    email: profile.emails[0].value,
                },
                displayName: profile.displayName,
            }).save();

            done(null, newUser);
        }
    )
);

module.exports = passport;