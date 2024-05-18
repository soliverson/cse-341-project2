const gospeltopicValidation = [
    body('topic').not().isEmpty().withMessage('Topic is required'),
    body('definition').not().isEmpty().withMessage('Definition is required'),
];

const hymnsValidation = [
    body('topic').not().isEmpty().withMessage('Topic is required'),
    body('definition').not().isEmpty().withMessage('Definition is required'),
];

