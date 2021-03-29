const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../config/keys')
const User = require('../models/User')
const opts = {
    secretOrKey: keys.jwt,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (payload, done) => {
        try {
            const user = await User.findById(payload.userId).select('email id')
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        } catch (e) {
            console.log(e)
        }
    }))
}