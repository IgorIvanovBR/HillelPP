let bucketArr = [];
function launchBuyButton () {

    $('.buyButton').click(function () {
        let gameId = $(this).attr('data-id');
        let gameName = $(this).attr('name');
        bucketArr.push({id : gameId, gameName: gameName,});
    });
}
setTimeout(launchBuyButton, 200);

