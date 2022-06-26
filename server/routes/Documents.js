const express = require('express');
const router = express.Router();
const { Documents } = require('../models');

//pobieranie danych
router.get("/", async (req, res) => {
    const listOfDocuments = await Documents.findAll();
    res.json(listOfDocuments);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const document = await Documents.findByPk(id);
    res.json(document);
});

//wysyłanie danych
router.post("/", async (req, res) => {
    const document = req.body;
    await Documents.create(document);
    res.json(document);
});

module.exports = router;