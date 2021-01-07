function changeText(){
    var text = document.getElementById('newText').value;
    $.ajax({
        url: ('templates/ajax.php'),
        data: {text: text},
        method: 'POST',
        success: function(response) {
            document.getElementById('textChange').innerHTML = response;
        }
    });
}