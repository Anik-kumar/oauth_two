const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const {google} = require('./keys');
const User = require('../models/user_model');


passport.use(
  new GoogleStrategy({  
    callbackURL: "/auth/google/redirect",
    clientID: google.clientID,
    clientSecret: google.clientSecret
  }, async (accessToken, refreshToken, profileInfo, done) => {
    // console.log(profileInfo);
    const dbUser = await User.findOne({ googleId: profileInfo.id });
    
    if(!dbUser.googleId) {
      console.log(dbUser);
      
      new User({
        username: profileInfo.name.givenName + "_" + profileInfo.name.familyName,
        googleId: profileInfo.id,
        fullname: profileInfo.displayName
      }).save()
        .then(resp => {
          console.log("User is stored in db")
        })
        .catch(err => {
          console.log("Exception error in storing db")
        });
    } else {
      console.log("User Exists");
    }

  })
)