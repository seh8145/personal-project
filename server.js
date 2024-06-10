const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'travel_app'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('MySQL connected...');
  }
});

// 리뷰 가져오기
app.get('/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

// 리뷰 추가
app.post('/reviews', (req, res) => {
  const { user_name, review_text } = req.body;

  if (!user_name || !review_text) {
    return res.status(400).json({ error: 'User name and review text are required' });
  }

  const sql = 'INSERT INTO reviews (user_name, review_text) VALUES (?, ?)';
  db.query(sql, [user_name, review_text], (err, result) => {
    if (err) {
      console.error('Error posting review:', err);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    res.json({ id: result.insertId, user_name, review_text });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});