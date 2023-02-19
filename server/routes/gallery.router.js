const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const likedImage = req.body;
    const sqlText = `UPDATE gallery SET likes=$1 WHERE id=$2`;
    pool.query(sqlText, [likedImage.likes, galleryId])
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStuat(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery;`
    pool.query(sqlText)
    .then((result) => {
    res.send(result.rows);
    })
    .catch((error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
    });
    
}); // END GET Route

//POST
router.post('/', (req, res) => {
    const galleryItem = req.body;
    const sqlText = `INSERT INTO gallery ("path", "description", "likes")
    VALUES ($1, $2, $3)`;
    pool.query(sqlText, [galleryItem.path, galleryItem.description, galleryItem.likes])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
})

module.exports = router;