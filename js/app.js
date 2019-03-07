function sendRequest(method = 'GET', data) {
  $.ajax({
    url: 'http://localhost:3000/users',
    method,
    data
  }).done((result) => {
    if (result === 'ok') {
      console.log('WOOOHOOO, we did it');
    } else {
      const users = JSON.parse(result);
      createElements(users);
    }
  });
}
function createElements(users) {
  const parentEl = $('#wrapper');
  users.forEach(user => {
    $('<h2>', {
      'data-id': user.id,
        class: 'names',
      text: user.name,
    }).appendTo(parentEl);
        $('<p>', {
          'data-id': user.id,
            class: 'genre',
            text:   'Game genre: '  + user.genre,
        }).appendTo(parentEl);
      $('<img>', {
          'data-id': user.id,
          class: 'image',
          src: user.img,
      }).appendTo(parentEl);
      $('<input>', {
        'data-id':user.id,
          type: 'button',
          name: user.addInfo,
          value: 'Show more info',
          class: 'buttonsInfo',
      }).appendTo(parentEl);
      $('<input>', {
        'data-id' :user.id,
          type: 'button',
          name: user.name,
          value: 'Buy',
          class: 'buyButton',
      }).appendTo(parentEl);
      $('<p>', {
          'data-id' : user.id,
          class: 'marks',
          text:  'Mark of the editor: ' + user.mark,
      }).appendTo(parentEl);
      $('<p>', {
          'data-id' : user.id,
          class: 'addInfoS',
          text: user.addInfo,
      }).appendTo(parentEl);
      $('<hr>').appendTo(parentEl);
  });
}
$(document).ready(() => {
   function str(){
    sendRequest();
  } str();
});
