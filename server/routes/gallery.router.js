const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

//POST Route
router.post('/', (req, res) => {
    const galleryItem = req.body;
    const sqlText = `INSERT INTO gallery ("path", "description", "likes")
    VALUES ($1, $2, $3)`;
    pool.query(sqlText, [galleryItem.path, galleryItem.description, galleryItem.likes])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(error)
        res.sendStatus(500);
    })
})


module.exports = router;