const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;
const dbURI = "mongodb+srv://noormedia82:Noor123$@bookstore.lh3ob.mongodb.net/?retryWrites=true&w=majority&appName=bookstore"

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


const bookRouter = require('./routes/books');
app.use('/books', bookRouter);
  
 
app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
