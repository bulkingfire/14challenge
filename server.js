const path123 = require("path");
const express = require("express");
const session = require("express-session");
const handle1234 = require("express-handlebars");
const routes1245 = require("./controllers");
const aide = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const htmlhandlebars = handle1234.create({ helpers: aide });

const operating = {
  secret: "not known",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(operating));

app.engine("handlebars", htmlhandlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path123.join(__dirname, "public")));

app.use(routes1245);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
