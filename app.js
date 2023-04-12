const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	// res.send("Hello World");
	// res.json({ nama: "Nursandy Ihksan", email: "sandy@gmail.com", nohp: "123" });
	res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
	// res.send("Halaman About");
	res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
	// res.send("Halaman Contact");
	res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
	res.send(
		`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
	);
});

app.use("/", (req, res) => {
	res.status(404);
	res.send("<h1>404</h1>");
});

app.listen(port, () => {
	console.log(`Berjalan di port ${port}`);
});
