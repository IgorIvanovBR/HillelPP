function deleteLaunch() {
    $('.deleteBucketB').click(function() {
        let ddataIndex = $(this).attr('data-id');
        ddataIndex--;
        if (bucketArr[ddataIndex] === undefined){
            ddataIndex++;
            delete bucketArr[ddataIndex];
        }else{
            delete  bucketArr[ddataIndex];
        }

         let dataIndex = '.' + $(this).attr('data-id');
        $(dataIndex).remove();
        $(this).remove();
    });
}