console.log('JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');
    
   $('body').on('click', '#addition', sendAddition);
   $('body').on('click', '#subtraction', sendSubtraction);
   $('body').on('click', '#multiplication', sendMultiplication);
   $('body').on('click', '#division', sendDivision);

});//end DocumentReady

function sendAddition(){
    $.ajax ({
       method: 'POST',
       url: '/math/addition',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            //placeholder for append to DOM***
            getMath();
        }
   })
}//end sendAddition to server


function getMath(){ //takes array and puts it on client consola
    $.ajax({
        method: 'GET',
        url: '/math/addition',
        success:  function(response){
            console.log('testing tester',response);
            $('body').append('<h1>' + response + '</h1>');
        }
    })
}

function sendSubtraction(){
    $.ajax ({
       method: 'POST',
       url: '/math/subtraction',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            //placeholder for append to DOM***
            getMath();
        }
   })
}//end sendAddition to server

function sendMultiplication(){
    $.ajax ({
       method: 'POST',
       url: '/math/multiplication',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            //placeholder for append to DOM***
            getMath();
        }
   })
}//end sendAddition to server

function sendDivision(){
    $.ajax ({
       method: 'POST',
       url: '/math/division',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            //placeholder for append to DOM***
            getMath();
        }
   })
}//end sendAddition to server