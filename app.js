const express = require('express');
const app = express();
const authRoutes = require("./routes/auth_routes");

// setup a view engine
app.set('view engine', 'ejs');


app.use("/auth", authRoutes);
// home route
app.get('/', (req, res) => {
  res.render("home");
});


const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log("Server is running at port ", port);
})