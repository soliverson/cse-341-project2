const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const { body, validationResult } = require('express-validator');

const getAll = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    try {
        const result = await mongodb.getDatabase().db().collection('gospeltopics').find();
        const gospeltopics = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(gospeltopics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    try {
        const gospeltopicId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('gospeltopics').findOne({ _id: gospeltopicId });
        if (result) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Gospel topic not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createGospeltopic = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const gospeltopic = {
        topic: req.body.topic,
        definition: req.body.definition,
        scriptures: req.body.scriptures,
        hymns: req.body.hymns,
        quotes: req.body.quotes,
        otherGT: req.body.otherGT
    };
    try {
        const response = await mongodb.getDatabase().db().collection('gospeltopics').insertOne(gospeltopic);
        if (response.acknowledged) {
            res.status(201).json(response.insertedId);
        } else {
            res.status(500).json({ message: 'Failed to create gospel topic.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateGospeltopic = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const gospeltopicId = new ObjectId(req.params.id);
        const gospeltopic = {
            topic: req.body.topic,
            definition: req.body.definition,
            scriptures: req.body.scriptures,
            hymns: req.body.hymns,
            quotes: req.body.quotes,
            otherGT: req.body.otherGT
        };
        const response = await mongodb.getDatabase().db().collection('gospeltopics').replaceOne({ _id: gospeltopicId }, gospeltopic);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Gospel topic not found or no changes made' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteGospeltopic = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    try {
        const gospeltopicId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('gospeltopics').deleteOne({ _id: gospeltopicId });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Gospel topic not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAll,
    getSingle,
    createGospeltopic,
    updateGospeltopic,
    deleteGospeltopic,
    gospeltopicValidation
};