const router = require('express').Router(); 
const passport = require('passport');
const checkLogin = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}



router.get('/profile', checkLogin, (req, res) => {
  res.render('profile', { _fullName: req.user.fullname, _user: req.user });
});



module.exports = router;