const { body } = require('express-validator');

const gospeltopicValidation = [
    body('topic').not().isEmpty().withMessage('Topic is required'),
    body('definition').not().isEmpty().withMessage('Definition is required'),
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
