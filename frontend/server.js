import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

// Middle
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log(`Server is listening to ${port}`)
})