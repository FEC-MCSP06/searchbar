const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const pool = require('./pool');
const PORT = 3202;

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// get 
app.get('/api/searchbar', async(req, res) => {
    try {
        const id = parseInt(req.body.id);
        console.log(id)
        if(id){
            const videoKey = await pool.query(`SELECT * FROM videos WHERE id = ${id}`);
            res.status(200).json(videoKey.rows)
        }else{
            const videoKeys = await pool.query('SELECT * FROM videos');
            res.status(200).json(videoKeys.rows)
        }
    } catch (err) {
        console.log(err);
        res.status(500).end(err)
    }
})

// app.post

// app.put

//app.delete

app.listen(PORT, () => {
    console.log(`Now Listening on Port: ${PORT}`)
})