const mongodb = require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('gospeltopics').collection('gospeltopics').find();
    result.toArray().then((gospeltopics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(gospeltopics);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('gospeltopics').collection('gospeltopics').find({_id: userId });
    result.toArray().then((gospeltopics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(gospeltopics[0]);
    });
};

module.exports  = {
    getAll,
    getSingle

};