// const special = document.getElementById('special');

// special.addEventListener (
//     'click', 
//     function() {
//         alert("Special button clicked.");
//     }
// );

// const username = document.getElementById('input');

// username.addEventListener(
//     'keypress',
//     function (e){
//         console.log('key press: ' + e.key);
//     }
// );

$(document).ready(function() {
    $('#special').on(
        'click',
        function () {
            $(this).text('clicked');
        }
    );
});
