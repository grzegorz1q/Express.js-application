const mountains = require('../data/mountains');
const climbers = require('../data/climbers');

const fs = require('fs');
const path = require('path');

exports.mountainsList = function(req,res){
    res.render('mountains', {mountains: mountains});
}

exports.getMountainPostForm = function(req,res){
    res.render('mountainPostForm', {mountains: mountains});
};

exports.getMountainsByLocationAndHeightForm = function(req,res){
    const locations = [];
    for(const mountain of mountains){
        if(!locations.includes(mountain.location)){
            locations.push(mountain.location);
        }
    }
    res.render('mountainsGetByLocationAndHeightForm', {mountains: mountains, locations});
};

exports.addMountain = function(req, res){
    const { name, location, height, firstAscent, description} = req.body;

    const newMountain = {
        id: mountains.length,
        images: [],
        name,
        location,
        height: parseInt(height),
        firstAscent,
        description
    };

    if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
            newMountain.images.push(file.filename);
        });
    }

    mountains.push(newMountain);
    res.redirect('/mountains');
}

exports.getMountainsByLocationAndHeight = function(req, res){
    const { location, firstHeight, secondHeight, siteView, jsonView, jsonDow} = req.query;

    const filteredMountains = mountains.filter(mountain => 
        mountain.location === location && 
        mountain.height >= firstHeight && 
        mountain.height <= secondHeight);
    if (jsonDow) {
        const filePath = path.join(__dirname, 'filteredMountains.json');
        fs.writeFile(filePath, JSON.stringify(filteredMountains, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Błąd zapisu pliku');
            }
            res.download(filePath, 'filteredMountains.json');
        });
    } else if (siteView) {
        res.render('mountains', { mountains: filteredMountains, location, firstHeight, secondHeight });
    } else if (jsonView){
        res.json(filteredMountains)
    } else{
        res.status(400).send('Niepoprawne żądanie');
    }
}

exports.getMountainInfoById = function(req, res){
    const mountainId = req.params.id;
    const mountain = mountains.find(m => m.id === parseInt(mountainId));
    res.render('mountainInfo', { mountain });
}

exports.getMountainByClimberId = function(req,res){
    const climberId = req.params.id;
    const climber = climbers.find(c => c.id === parseInt(climberId));

    if(climber){
        const mountainNames = climber.mountains;
        const climberMountains = [];
        for (let i = 0; i < mountainNames.length; i++) {
            const name = mountainNames[i];
            const dataMountains = mountains.find(m => m.name === name);

            if (dataMountains) {
                climberMountains.push(dataMountains);
            } else {
                climberMountains.push({
                    name,
                    location: "Brak danych",
                    height: "Brak danych",
                    firstAscent: "Brak danych",
                    description: "Brak danych"
                });
            }
        }
        res.render('mountainsByClimber', {mountains: climberMountains, climber})
    }
    else{
        res.status(404).send('Climber not found');
    }
}

exports.getPhotoPostForm = function(req, res){
    const mountainId = req.params.id;
    const mountain = mountains.find(m => m.id === parseInt(mountainId));
    res.render('photoPostForm', {mountain});
}

exports.addPhoto = function(req,res){
    const mountainId = req.params.id;
    const mountain = mountains.find(m => m.id === parseInt(mountainId));

    if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
            mountain.images.push(file.filename);
        });
        res.redirect(`/mountains/${mountainId}`);
    }
}