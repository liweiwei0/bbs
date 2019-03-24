$(function () {
    var messageId = localStorage.getItem("messageId");
    var userId = localStorage.getItem("userId");
    var userName = localStorage.getItem("userName");

    // 获取精选内容
    var featured = $('#featured-ul');
    $.ajax({
        url: '/message/getFeatured',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    featured.append("<li class='article-entry standard'>"
                        + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='javascript:void(0);' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>")
                });
            }
        }
    });

    // 获取帖子
    $.ajax({
        url: '/message/getMessage?id=' + messageId,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                var message = data.data;
                $('#crumb-title').html(message.title);
                $('#msg-title').html(message.title);
                $('#msg-date').html(message.createTime);
                $('#msg-tag').html(message.tag);
                $('#msg-content').html(message.content);
                $('#msg-heat').html(message.heat);
            }
        }
    });

    // 获取评论
    var review = $('#msg-review');
    var i = 0;
    $.ajax({
        url: '/review/getReview?messageId=' + messageId,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    i++;
                    if (userId && v && userId === v.userId) {
                        review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                            + "<article id='comment-4'><a href='javascript:void(0);'><img alt='' src='http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G'"
                            + "class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                            + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                            + v.userName + "</a></cite><a class='comment-reply-link' href='javascript:void(0);'>" + "" + "</a>"
                            + "</h5><p class='date'><a href='javascript:void(0)'>"
                            + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a>"
                            + "<a href='javascript:void(0)' onclick='delReview(" + v.id + ")'>  删除评论  </a>"
                            + "</p></div><div class='comment-body'><p>" + v.content + "</p></div></article></li>");
                    } else {
                        review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                            + "<article id='comment-4'><a href='javascript:void(0);'><img alt='' src='http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G'"
                            + "class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                            + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                            + v.userName + "</a></cite><a class='comment-reply-link' href='javascript:void(0);'>" + "" + "</a>"
                            + "</h5><p class='date'><a href='javascript:void(0)'>"
                            + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a>"
                            + "</p></div><div class='comment-body'><p>" + v.content + "</p></div></article></li>");

                    }
                });
                $('#msg-review-count').html(i + " 评论");
            }
        }
    });

    // 保存评论
    $('#save-review').on('click', function () {
        var messageId = localStorage.getItem("messageId");
        var userId = localStorage.getItem("userId");
        var comment = $('#comment').val();
        $.ajax({
            url: '/review/save',
            type: 'POST',
            data: {
                messageId: messageId,
                userId: userId,
                connect: comment
            },
            cache: false,
            success: function (data) {
                alert(data);
                window.location.reload();
            }
        });
    });

});

// 删除评论
function delReview(id) {
    $.ajax({
        url: '/review/del',
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

function toReview(messageId) {
    localStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}