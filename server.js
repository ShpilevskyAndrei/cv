express = require("express");
path = require("path");
app = express();
app.use(express.static("./dist/cv"));
app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: "dist/cv/" });
});
app.listen(process.env.PORT || 8080);
