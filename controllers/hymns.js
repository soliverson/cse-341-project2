const { validationResult } = require('express-validator');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('hymns').find();
        const hymns = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(hymns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const hymnId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('hymns').findOne({ _id: hymnId });
        if (result) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Hymn not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createHymn = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const hymn = {
        hymnName: req.body.hymnName,
        hymnNumber: req.body.hymnNumber,
        topic: req.body.topic,
        scripture: req.body.scripture
    };
    try {
        const response = await mongodb.getDatabase().db().collection('hymns').insertOne(hymn);
        if (response.acknowledged) {
            res.status(201).json(response.insertedId);
        } else {
            res.status(500).json({ message: 'Failed to create hymn' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateHymn = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const hymnId = new ObjectId(req.params.id);
        const hymn = {
            hymnName: req.body.hymnName,
            hymnNumber: req.body.hymnNumber,
            topic: req.body.topic,
            scripture: req.body.scripture
        };
        const response = await mongodb.getDatabase().db().collection('hymns').replaceOne({ _id: hymnId }, hymn);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Hymn not found or no changes made' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteHymn = async (req, res) => {
    try {
        const hymnId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('hymns').deleteOne({ _id: hymnId });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Hymn not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    getSingle,
    createHymn,
    updateHymn,
    deleteHymn
};
