const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
  // 
  clientID: '256463698194-lk4qr10dos0e6hshk40jjts1rup35r1q.apps.googleusercontent.com',
  clientSecret: 'h7Y83uS93-pSxeieTFRUaQRr'
}), () => {
  // passport callback 
})