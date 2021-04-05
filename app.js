const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passportSetup =  require('./config/passport_setup');
const { mongodb, session } = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require("./routes/auth_routes");
const commonRoutes = require("./routes/common_routes");

// setup a view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 1000*60*60,
  keys: [session.cookieKey]
}));

// init passport
app.use(passport.initialize());
app.use(passport.session());


// connect db
// mongoose.connect(mongodb.connectLocal, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(mongodb.connectLocal, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
  console.log("Connected to oauthdb database");
});


app.use("/auth", authRoutes);
app.use(commonRoutes);


const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log("Server is running at port ", port);
})