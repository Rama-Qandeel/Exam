const express = require("express");
const {createBook,getBooks}=require("../back-end/main")
const app = express();
express.json();


app.post("/books",createBook)
app.get("/books",getBooks)


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});