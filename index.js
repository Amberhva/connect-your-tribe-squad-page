import express from "express";

// Squad A
const urlA = "https://whois.fdnd.nl/api/v1/squad/squad-a-2022";
const dataA = await fetch(urlA)
    .then((response) => response.json())
    .catch((error) => error);

console.log(dataA);

// Squad B
const urlB = "https://whois.fdnd.nl/api/v1/squad/squad-b-2022";
const dataB = await fetch(urlB)
    .then((response) => response.json())
    .catch((error) => error);

console.log(dataB);

// Squad C
const url = "https://whois.fdnd.nl/api/v1/squad/squat-c-2022";
const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);

console.log(data);

// Maak een nieuwe express app
const app = express();

// Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maak een route voor de index voor squad A
app.get("/squadA", (request, response) => {
    console.log(request.query.squad);

    response.render("index", dataA);
});

// Maak een route voor de index voor squad B
app.get("/squadB", (request, response) => {
    console.log(request.query.squad);

    response.render("index", dataB);
});

// Maak een route voor de index voor squad C
app.get("/", (request, response) => {
    console.log(request.query.squad);

    response.render("index", data);
});

// Stel het poortnummer in en start express
app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
    console.log(`Application started on http://localhost:${app.get("port")}`);
});
