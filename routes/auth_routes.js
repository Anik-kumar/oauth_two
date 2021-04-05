const router = require('express').Router(); 
const passport = require('passport');

// login
router.get('/login', (req, res) => {
  res.render('login');
});

// logout
router.get('/logout', (req, res) => {
  res.send("Logging out");
});

// google+ oauth consent
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// google oauth redirect after consent
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send("We've got you");
  res.redirect("/profile");
});



module.exports = router;