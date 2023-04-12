const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

const app = express();
const port = 3000;

// menggunakan ejs

app.set("view engine", "ejs");

// third party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// built in middleware
app.use(express.static("public"));

// application level middleware
app.use((req, res, next) => {
	console.log("Time : ", Date.now());
	next();
});

app.get("/", (req, res) => {
	const mahasiswa = [
		{
			nama: "Nursandy Ihksan",
			email: "sandy@gmail.com",
		},
		{
			nama: "Azhi Muahnaf Rais",
			email: "azhi@gmail.com",
		},
		{
			nama: "Udin",
			email: "udin@gmail.com",
		},
	];
	res.render("index", {
		layout: "layouts/main-layout",
		nama: "Nursandy Ihksan",
		title: "Home",
		mahasiswa,
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		layout: "layouts/main-layout",
		title: "Halaman About",
	});
});

app.get("/contact", (req, res) => {
	res.render("contact", {
		layout: "layouts/main-layout",
		title: "Halaman Contact",
	});
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
