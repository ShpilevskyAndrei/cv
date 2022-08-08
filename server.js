express = require("express");
path = require("path");
app = express();
app.use(express.static(__dirname + "/dist/cv"));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/cv/index.html"));
});
app.listen(process.env.PORT || 8080);
