var express = require("express");
var app = express();
var api = require("./api/api");
var config = require("./config/config");

require("mongoose").connect(config.db.url, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(express.static("client/build"));
var err = require("./middleware/err");

require("./middleware/appMiddleware")(app);

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(err());

module.exports = app;
