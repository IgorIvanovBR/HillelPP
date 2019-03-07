function hello () {
    $('#bucket').click( function(event) {
        $('#overlay_bucket').fadeIn(400,
            function () {
                $('#modal_form_bucket')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
                $('#bucket').on('click', function () {

                    const parentElB = $('#modalInfo_bucket');
                    parentElB.text('');
                    bucketArr.forEach(function(bucketI){
                        $('<h2>', {
                            'data-id': bucketI.id,
                            name: bucketI.id,
                            class: bucketI.id,
                            text: bucketI.gameName,
                        }).appendTo(parentElB);
                        $('<input>', {
                            'data-id': bucketI.id,
                             type: 'button',
                             class: 'deleteBucketB',
                            value: 'X',
                        }).appendTo(parentElB);
                    });
                    deleteLaunch()
                });
            });
    });
    $('#modal_close_bucket, #overlay_bucket').click( function(){
        $('#modal_form_bucket')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('#overlay_bucket').fadeOut(400);
                }
            );
    })}
setTimeout(hello, 200);


