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
$('#want2buy').click(sendInfo());



