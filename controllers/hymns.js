const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Hymns']
    const result = await mongodb.getDatabase().db().collection('hymns').find();
    result.toArray().then((hymns) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(hymns);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Hymns']
    const hymnId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('hymns').find({_id: hymnId});
    result.toArray().then((hymns) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(hymns[0]);
    });
};

const createHymn = async (req, res) =>{
    //#swagger.tags=['Hymns']
    const hymn = {
        hymnName: req.body.hymnName,
        hymnNumber: req.body.hymnNumber,
        topic: req.body.topic,
        scripture: req.body.scripture,
    };
    const response = await mongodb.getDatabase().db().collection('hymns').insertOne(hymn);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error occurred while updating the hymn.`);
    }
};

const updateHymn = async (req, res) => {
    //#swagger.tags=['Hymns']
    const hymnId = new ObjectId(req.params.id);
    const hymn = {
        hymnName: req.body.hymnName,
        hymnNumber: req.body.hymnNumber,
        topic: req.body.topic,
        scripture: req.body.scripture,
    };
    const response = await mongodb.getDatabase().db(church).collection('hymns').replaceOne({_id: hymnId }, hymn);
        if(response.modifiedCount > 0) {
        res.status(204).send();
        } else{
            res.status(500).json(response.error || `Some error occurred while updating the hymn.`);
        }
};

const deleteHymn = async (req, res) => {
    //#swagger.tags=['Hymns']
    const hymnId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('hymns').deleteOne({ _id: hymnId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error occurred while deleting the hymn.`);
    }
};

module.exports = {
    getAll,
    getSingle,
    createHymn,
    updateHymn,
    deleteHymn
};