const express = require('express');
const app = express();
require('dotenv').config();
const indexRoute = require("./src/routes/index")


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/",indexRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} mode ${process.env.NODE_ENV}.`);
});