const { body } = require('express-validator');

const gospeltopicValidation = [
    body('topic').notEmpty().withMessage('Topic is required'),
    body('definition').notEmpty().withMessage('Definition is required'),
    body('scriptures').notEmpty().withMessage('Scriptures are required'),
    body('hymns').notEmpty().withMessage('Hymns are required'),
    body('quotes').notEmpty().withMessage('Quotes are required'),
    body('otherGT').notEmpty().withMessage('Other gospel topics are required')
];

const hymnValidation = [
    body('hymnName').notEmpty().withMessage('Hymn name is required'),
    body('hymnNumber').isInt().withMessage('Hymn number must be a number'),
    body('topic').notEmpty().withMessage('Topic is required'),
    body('scripture').notEmpty().withMessage('Scripture is required'),
];

module.exports = {
    gospeltopicValidation,
    hymnValidation
};
