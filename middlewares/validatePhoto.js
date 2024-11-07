const mountains = require('../data/mountains');

function validatePhoto(req, res, next) {
    const mountainId = req.params.id;
    const mountain = mountains.find(m => m.id === parseInt(mountainId));
    console.log(mountainId)
    let errorMessage = '';

    if (!req.files || req.files.length === 0) {
        errorMessage = 'Nie wybrano żadnego pliku';
    }

    if (errorMessage) {
        res.status(400).render('photoPostForm', {errorMessage, mountain});
    } else {
        next();
    }
}

module.exports = validatePhoto;
