console.log('JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');
    
   $('body').on('click', '#addition', sendAddition);
//    $('body').on('click', '#subtraction', sendSubtraction);
//    $('body').on('click', '#multiplication', sendMultiplication);
//    $('body').on('click', '#division', sendDivision);

//extra test data
    // $.ajax({
    //     method: 'GET',
    //     url: '/math',
    //      success: function (response){
    //      console.log('math response', response);
    //      $('body').append(response);
    //      }
    //  })

});//end DocumentReady

function sendAddition(){
    $.ajax ({
       method: "POST",
       url: '/math/addition',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            //placeholder for append to DOM***
            getAddition();
        }
   })
}//end sendAddition to server

function getAddition(){ //takes array and puts it on client consola
    $.ajax({
        method: 'GET',
        url: '/math/addition',
        success:  function(response){
            console.log('testing tester',response);
            $('body').append('<h1>' + response + '</h1>');
        }
    })
}


// function sendSubtraction() {
//     console.log('submit subtraction numbers');
//    $.ajax ({
//        method: "POST",
//        url: '/math/subtraction',
//        data: {numbers:
//             [ $('#number1').val(),
//             $('#number2').val()]},
//         success: function(response){
//         //placeholder for append to DOM***
//         }
//    })
// }//end sendSubtraction