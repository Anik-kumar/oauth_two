const router = require('express').Router(); 

// login
router.get('/login', (req, res) => {
  res.render('login');
});

// logout
router.get('/logout', (req, res) => {
  res.send("Logging out");
});

router.get('google', (req, res) => {
  // handle with passport
  res.send("Logging in with google");
});



module.exports = router;