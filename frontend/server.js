import express from "express";
const port = 3000;

const app = express();

app.get((res, req) => {
    res.sendFile()
})

app.listen(port, () => {
    console.log(`Server is listening to ${port}`)
})