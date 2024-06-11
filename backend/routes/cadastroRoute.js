const express = require('express');
const router = express.Router();
const productController = require('../controller/cadastros');

router.post('/', async (req, res) => {
    try {
        const newCadastro = await productController.createCadastro(req.body);
        res.status(201).json(newCadastro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const cadastros = await productController.getAllCadastros();
        res.json(cadastros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cadastro = await productController.getCadastroById(req.params.id);
        res.json(cadastro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCadastro = await productController.updateCadastroById(req.params.id, req.body);
        res.json(updatedCadastro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await productController.deleteCadastroById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
