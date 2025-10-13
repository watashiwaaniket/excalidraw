import express, { json } from "express";
const app = express();

app.get("/", (req, res) => {
    res.json({
        "message" : "Goober nigger"
    })
})

app.listen(3001, () => {
    console.log("App listening on port 3001")
})