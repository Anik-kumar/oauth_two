const express = require('express');
const app = express();


// setup a view engine
app.set('view engine', 'ejs');


// home route
app.get('/', (req, res) => {
  res.render("home");
});


const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log("Server is running at port ", port);
})