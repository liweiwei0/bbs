$(function () {
    var msgId = localStorage.getItem("msgId");

    // 获取精选内容
    var featured = $('#featured-ul');
    $.ajax({
        url: '/msg/getFeatured',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function (v) {
                    featured.append("<li class='article-entry standard'>"
                        + "<h4><a href='review.html?id=" + v.id + "'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='#' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>")
                });
            }
        }
    });

    // 获取帖子
    $.ajax({
        url: '/msg/getMsg?id=' + msgId,
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

    // 获取评论
    var review = $('#msg-review');
    var i = 0;
    $.ajax({
        url: '/review/getReview?msgId=' + msgId,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function (v) {
                    i++;
                    review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                        + "<article id='comment-4'><a href='#'><img alt='' src='http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G'"
                        + "class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                        + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                        + v.userName + "</a></cite><a class='comment-reply-link' href='#'>" + "" + "</a>"
                        + "</h5><p class='date'><a href='javascript:void(0)'>"
                        + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a><a href='javascript:void(0)' onclick='delReview(" + v.id + ")'>  删除评论  </a></p></div>"
                        + "<div class='comment-body'><p>" + v.content + "</p></div></article></li>");
                });
                $('#msg-review-count').html(i + " 评论");
            }
        }
    });

    // 保存评论
    $('#save-review').on('click', function () {
        var msgId = localStorage.getItem("msgId");
        var userId = localStorage.getItem("userId");
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
                window.location.reload();
            }
        });
    })
});

// 删除评论
function delReview(id) {
    $.ajax({
        url: '/review/delReview',
        type: 'POST',
        data: {
            id: id
        },
        cache: false,
        success: function (data) {
            alert(data);
        }
    });
}