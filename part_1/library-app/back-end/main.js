const Connection = require("../back-end/db");

const createBook = (req, res) => {
  const { title, author, pages, publisher, published_at } = req.body;
  const data = [title, author, pages, publisher, published_at];
  const query = `INSERT INTO library (title , author, pages, publisher, published_at)VALUSE(?,?,?,?,?)`;
  Connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const getBooks = (req, res) => {
  const query = `SELECT * FROM library`;
  Connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const getSpecificBook = (req, res) => {
  const { book_id } = req.params.book_id;
  const query = `SELECT * FROM library WHERE book_id=?`;
  const data = [book_id];
  Connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const deleteSpecificBook = (req, res) => {
  const { book_id } = req.params.book_id;
  const query = `DELETE * FROM library WHERE book_id=?`;
  const data = [book_id];
  Connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  createBook,
  getBooks,
  getSpecificBook,
  deleteSpecificBook,
};
