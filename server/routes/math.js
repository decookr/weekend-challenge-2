var express = require('express');
var router = express.Router();
var guessArray = [];

// var x = 1;
// var y = 3;

// var add = x+y;

// router.get('/', function(req, res){
//     console.log('this is working');
//     res.send({add});  
    
// });

router.post('/addition', function(req, res){
    guessArray = req.body.numbers;
    console.log('guessArray', guessArray);
    
    // var numberArray = req.body.numbers;
    // var addedNumbers = 0;
    // addedNumbers = numberArray[0] + numberArray[1];
    res.sendStatus(200);
});//end addition


router.get('/addition', function(req,res){
    console.log(guessArray);
    res.send(guessArray);
})

module.exports = router;
