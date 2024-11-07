function validateMountain(req, res, next) {
    const { name, location, height } = req.body;
    let errorMessage = '';

    if (height <= 0) {
        errorMessage = 'Wysokość musi być liczbą większą od zera';
    }
    if (height != parseInt(height)){
        errorMessage = 'Wysokość musi być liczbą';
    }
    if (!name || !location || !height) {
        errorMessage = 'Wymagane pola: nazwa, lokalizacja, wysokość';
    }
    if (errorMessage) {
        res.status(400).render('mountainPostForm', {errorMessage});
    } else {
        next();
    }
}

module.exports = validateMountain;
