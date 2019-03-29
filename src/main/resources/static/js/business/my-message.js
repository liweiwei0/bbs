$(function () {

    var userId = sessionStorage.getItem("userId");
    var content = sessionStorage.getItem('content') || '';
    $('#s').val(content);

    // 我发表的帖子
    var my_message_list = $('#my-message-list');
    $.ajax({
        url: '/message/getMyMessage',
        type: 'POST',
        cache: false,
        data: {
            userId: userId,
            content: content,
            pageNum: 1,
            pageSize: 10
        },
        success: function (data) {
            if (data) {
                if (data.data != null && data.code === 1 && data.data.data != null) {
                    data.data.data.forEach(function (v) {
                        my_message_list.append("<li class='article-entry standard'>"
                            + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                            + "<span class='article-meta'>" + v.createTime + " in <a href='javascript:void(0);' title='"
                            + v.tag + "'>" + v.tag + "</a></span>"
                            + "<span class='like-count'>" + v.heat + "</span></li>");
                    });
                }
            }
        }
    });

    // 我发表的帖子
    var my_review_message_list = $('#my-review-message-list');
    $.ajax({
        url: '/message/getMyReviewMessage',
        type: 'POST',
        cache: false,
        data: {
            userId: userId,
            content: content,
            pageNum: 1,
            pageSize: 10
        },
        success: function (data) {
            if (data) {
                if (data.data != null && data.code === 1 && data.data.data != null) {
                    data.data.data.forEach(function (v) {
                        my_review_message_list.append("<li class='article-entry standard'>"
                            + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                            + "<span class='article-meta'>" + v.createTime + " in <a href='javascript:void(0);' title='"
                            + v.tag + "'>" + v.tag + "</a></span>"
                            + "<span class='like-count'>" + v.heat + "</span></li>");
                    });
                }
            }
        }
    });

    // 查询
    $('#search').on('click', function () {
        var s = $('#s').val();
        sessionStorage.setItem('content', s);
    });
});

function toReview(messageId) {
    sessionStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}
