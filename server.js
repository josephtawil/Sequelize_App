//download npm sequelize, sequelize-cli, and mysql2
//also run npx sequelize init to get migrations,models,and config folders and files
// npx sequelize migration:generate --name word  is used to create a new migration and run the up commands
// npx sequelize db:migrate:undo    is used to undo the migration and run the down commands
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoute = require("./routes/api-routes");
app.use(apiRoute);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});