const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passportSetup =  require('./config/passport_setup');
const authRoutes = require("./routes/auth_routes");
const { mongodb } = require('./config/keys');

// setup a view engine
app.set('view engine', 'ejs');

// connect db
// mongoose.connect(mongodb.connectLocal, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(mongodb.connectLocal, {useNewUrlParser: true}, ()=> {
  console.log("Connected to oauthdb database");
});


app.use("/auth", authRoutes);
// home route
app.get('/', (req, res) => {
  res.render("home");
});


const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log("Server is running at port ", port);
})