$(function () {
    var userId = getvar('userId');
    console.log(userId);
    $('#userId').val(userId);
});

$(function () {
    $('#save-msg').on('click', function () {
        var userId = $('#userId').val();
        var title = $('#title').val();
        var comment = $('#comment').val();
        $.ajax({
            url: '/msg/save',
            type: 'POST',
            data: {
                userId: userId,
                title: title,
                comment: comment
            },
            cache: false,
            success: function (data) {
                alert(data);
            }
        });
    })
});

function getvar(par){
    var url = window.location.href;
    var urlsearch = url.split('?');
    pstr = urlsearch[1].split('&');
    for (var i = pstr.length - 1; i >= 0; i--) {
        var tep = pstr[i].split("=");
        if(tep[0] == par){
            return tep[1];
        }
    }
    return(false);
}