const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const {google} = require('./keys');
const User = require('../models/user_model');


passport.serializeUser((user, done) => {
  
  done(null, user.id);

});


passport.deserializeUser((id, done) => {
  
  User.findById(id).then(user => {
    // if(user.id) {
      done(null, user);
    // }
  })


});


passport.use(
  new GoogleStrategy({  
    callbackURL: "/auth/google/redirect",
    clientID: google.clientID,
    clientSecret: google.clientSecret
  }, async (accessToken, refreshToken, profileInfo, done) => {
    // console.log(profileInfo);
    const dbUser = await User.findOne({ googleId: profileInfo.id });
    
    if(dbUser) {
      console.log("User Exists");
      done(null, dbUser)
    } else {
      
      console.log(dbUser);
      
      new User({
        username: (profileInfo.name.givenName + "_" + profileInfo.name.familyName).toLowerCase(),
        googleId: profileInfo.id,
        fullname: profileInfo.displayName,
        thumbnail: profileInfo._json.picture
      }).save()
        .then(resp => {
          console.log("User is stored in db")
          done(null, resp);
        })
        .catch(err => {
          console.log("Exception error in storing db")
        });
    }

  })
)