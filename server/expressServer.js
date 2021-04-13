const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3202;

app.use(cors());
app.use(morgan('combined'));

// app.get

// app.get

// app.post

// app.put

app.delete

app.listen(PORT, () => {
    console.log(`Now Listening on Port: ${PORT}`)
})