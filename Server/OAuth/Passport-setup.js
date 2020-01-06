const poassport = require('passport');
const GoogleStatergy = require('passport-google-oauth20');
const config = require('config');


poassport.use(
    new GoogleStatergy({
        callbackURL: '/home',
        clientID: config.get('CLIENT_ID'),
        clientSecret: config.get('CLIENT_SECRET')

    }),()=>{
    }
)