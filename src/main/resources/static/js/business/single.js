$(function () {
    var id = getvar('id');
    $('#msgId').val(id);

    var userId = getvar('userId');
    $('#userId').val(userId);
});

$(function () {
    var featured = $('#featured-ul');
    $.ajax({
        url: '/msg/getFeatured',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function(v){
                    featured.append("<li class='article-entry standard'>"
                        + "<h4><a href='single.html?id=" + v.id + "'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='#' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>")
                });
            }
        }
    });
});

$(function () {
    var id = $('#msgId').val();
    $.ajax({
        url: '/msg/getMsg?id=' + id,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                $('#crumb-title').html(data.title);
                $('#msg-title').html(data.title);
                $('#msg-date').html(data.createTime);
                $('#msg-tag').html(data.tag);
                $('#msg-content').html(data.content);
                $('#msg-heat').html(data.heat);
            }
        }
    });
    var review = $('#msg-review');
    var i = 0;
    $.ajax({
        url: '/review/getReview?msgId=' + id,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function(v){
                    i++;
                    review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                        + "<article id='comment-4'><a href='#'><img alt='' src='http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G'"
                        + "class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                        + "<h5 class='author'><cite class='fn'><a href='#' rel='external nofollow' class='url'>"
                        + v.userName + "</a></cite><a class='comment-reply-link' href='#'>" + "" + "</a>"
                        + "</h5><p class='date'><a href='javascript:void(0)'>"
                        + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a></p></div>"
                        + "<div class='comment-body'><p>" + v.content + "</p></div></article></li>");
                });
                $('#msg-review-count').html(i + " 评论");
            }
        }
    });
});

$(function () {
   $('#save-review').on('click', function () {
       var msgId = $('#msgId').val();
       var userId = $('#userId').val();
       var comment = $('#comment').val();
       $.ajax({
           url: '/review/saveReview',
           type: 'POST',
           data: {
               msgId: msgId,
               userId: userId,
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
