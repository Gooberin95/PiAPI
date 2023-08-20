const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/",( req, res) => {
	res.status(200).send("<b>Brandon </b><br>Ruiz</b>")

});
app.listen(3000);

