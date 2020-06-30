//download npm sequelize, sequelize-cli, and mysql2
//also run npx sequelize init 
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});