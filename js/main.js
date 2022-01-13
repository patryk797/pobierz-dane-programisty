let dataURL = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#btn-load').on('click', function(){
    $("<div id='dane-programisty'>").appendTo('body');

    $.getJSON(dataURL, function(dane){
    $('<p>').text(dane.imie).appendTo('#dane-programisty');
    $('<p>').text(dane.nazwisko).appendTo('#dane-programisty');
    $('<p>').text(dane.zawod).appendTo('#dane-programisty');
    $('<p>').text(dane.firma).appendTo('#dane-programisty');
    })
})