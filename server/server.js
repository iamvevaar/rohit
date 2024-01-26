const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vevaar',
  database: 'vevaardb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.json());

app.get("/hi",(req , res)=>{
  const q = "SELECT * FROM crash_data_master "
  db.query(q , (err , data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
  
})



app.post('/submit', (req, res) => {
  const data = req.body;

  // Implement MySQL insertion based on your data attributes
  const query = "INSERT INTO crash_data_master (crashid) VALUES (?)";
  const values = [data.crashid];
  console.log(values + "addid this also")

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Data inserted successfully:', result);
    res.status(200).send('Data inserted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
