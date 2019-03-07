function sendInfo(method = 'POST') {
    $.ajax({
        url: 'http://localhost:3000/users',
        method,
        data: 'bucketArr=' + JSON.stringify(bucketArr),
    }).done((result) => {
        if (result === 'ok') {
            console.log('WOOOHOOO, we did it');
        } else {
            const users = JSON.parse(result);
            createElements(users);
        }
    });
}
$('#want2buy').click(function(){
    let mobileInfo = $('#numberP').val();
    alert('Thank you we will call you in 24 hours on your number ' + mobileInfo );
});



