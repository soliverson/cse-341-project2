const mongodb = require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('hymns').collection('hymns').find();
    result.toArray().then((hymns) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(hymns);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('hymns').collection('hymns').find({_id: userId });
    result.toArray().then((hymns) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(hymn[0]);
    });
};

module.exports  = {
    getAll,
    getSingle

};