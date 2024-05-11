const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const result = await mongodb.getDatabase().db().collection('gospeltopics').find();
    result.toArray().then((gospeltopics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(gospeltopics);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const gospeltopicId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('gospeltopics').find({_id: gospeltopicId});
    result.toArray().then((gospeltopics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(gospeltopics[0]);
    });
};

const createGospeltopic = async (req, res) =>{
    //#swagger.tags=['Gospeltopics']
    const gospeltopic = {
        topic: req.body.topic,
        definition: req.body.definition,
        scriptures: req.body.scriptures,
        hymns: req.body.hymns,
        quotes: req.body.quotes,
        otherGT: req.body.otherGT
    };
    const response = await mongodb.getDatabase().db().collection('gospeltopics').insertOne(gospeltopic);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error occurred while updating the gospel topic.`);
    }
};

const updateGospeltopic = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const gospeltopicId = new ObjectId(req.params.id);
    const gospeltopic = {
        topic: req.body.topic,
        definition: req.body.definition,
        scriptures: req.body.scriptures,
        hymns: req.body.hymns,
        quotes: req.body.quotes,
        otherGT: req.body.otherGT
    };
    const response = await mongodb.getDatabase().db(church).collection('gospeltopics').replaceOne({_id: gospeltopicId }, gospeltopic);
        if(response.modifiedCount > 0) {
        res.status(204).send();
        } else{
            res.status(500).json(response.error || `Some error occurred while updating the gospel topic.`);
        }
};

const deleteGospeltopic = async (req, res) => {
    //#swagger.tags=['Gospeltopics']
    const gospeltopicId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('gospeltopics').deleteOne({ _id: gospeltopicId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error occurred while deleting the gospel topic.`);
    }
};

module.exports = {
    getAll,
    getSingle,
    createGospeltopic,
    updateGospeltopic,
    deleteGospeltopic
};