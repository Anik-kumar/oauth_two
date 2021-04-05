const router = require('express').Router(); 
const passport = require('passport');
const checkLogin = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}

// home route
router.get('/', (req, res) => {
  res.render("home", { user: req.user });
});

// profile
router.get('/profile', checkLogin, (req, res) => {
  res.render('profile', { fullName: req.user.fullname, user: req.user });
});



module.exports = router;