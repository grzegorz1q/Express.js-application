const mountains = require('../data/mountains');

function validateMountainFilter(req, res, next) {
    const { firstHeight, secondHeight } = req.query;
    const locations = [];
    for(const mountain of mountains){
        if(!locations.includes(mountain.location)){
            locations.push(mountain.location);
        }
    }
    let errorMessage = '';

    if (!firstHeight || !secondHeight) {
        errorMessage = 'Pola minimalna i maksymalna wysokość są wymagane';
    }
    else if (firstHeight != parseInt(firstHeight) || secondHeight != parseInt(secondHeight)){
        errorMessage = 'Wysokości muszą być liczbami';
    }
    else if(firstHeight > secondHeight){
        errorMessage = 'Maksymalna wysokość musi być większa od minimalnej wysokości';
    }
    if (errorMessage) {
        res.status(400).render('mountainsGetByLocationAndHeightForm', {errorMessage, locations});
    } else {
        next();
    }
}

module.exports = validateMountainFilter;

