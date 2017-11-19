var express = require('express');
var router = express.Router();
var guessArray = [];
var addedNumbers = [];

router.post('/addition', function(req, res){
    guessArray = req.body.numbers;
    console.log('guessArray', guessArray);
    addedNumbers = [Number(guessArray[0])+Number(guessArray[1])];
    res.sendStatus(200);
});//end addition

router.post('/subtraction', function(req, res){
    guessArray = req.body.numbers;
    console.log('guessArray', guessArray);
    addedNumbers = [Number(guessArray[0])-Number(guessArray[1])];
    res.sendStatus(200);
});//end subtraction

router.post('/multiplication', function(req, res){
    guessArray = req.body.numbers;
    console.log('guessArray', guessArray);
    addedNumbers = [Number(guessArray[0])*Number(guessArray[1])];
    res.sendStatus(200);
});//end multiply

router.post('/division', function(req, res){
    guessArray = req.body.numbers;
    console.log('guessArray', guessArray);
    addedNumbers = [Number(guessArray[0])/Number(guessArray[1])];
    res.sendStatus(200);
});//end multiply

router.get('/addition', function(req,res){
    console.log(addedNumbers);
    res.send(addedNumbers);
})

module.exports = router;
