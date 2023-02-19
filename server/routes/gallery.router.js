const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET "likes"="likes"+1 WHERE "id"=$1`;
    pool.query(sqlText, [galleryId])
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id DESC;`
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
    console.log(galleryItem)
    const sqlText = `INSERT INTO gallery ("path", "description")
    VALUES ($1, $2);`;
    pool.query(sqlText, [galleryItem.path, galleryItem.description])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

module.exports = router;