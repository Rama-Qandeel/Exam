const express = require("express");
const {createBook,getBooks,getSpecificBook,deleteSpecificBook}=require("../back-end/main")
const app = express();
express.json();


app.post("/books",createBook)
app.get("/books",getBooks)
app.get("/books/:book_id",getSpecificBook)
app.delete("/books/:book_id",deleteSpecificBook)



const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});