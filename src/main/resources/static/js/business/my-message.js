$(function () {
    var content = sessionStorage.getItem('content') || '';
    $('#s').val(content);

    // 我发表的帖子
    flushMessage(content, 1);

    // 我发表的帖子
    flushReviewMessage(content, 1);

    // 查询
    $('#search').on('click', function () {
        var s = $('#s').val();
        sessionStorage.setItem('content', s);
    });
});

// 刷新我发布的帖子
function flushMessage(content, page) {
    var userId = sessionStorage.getItem("userId");

    var my_message_list = $('#my-message-list');
    my_message_list.html('');
    $.ajax({
        url: '/message/getMyMessage',
        type: 'POST',
        cache: false,
        data: {
            userId: userId,
            content: content,
            pageNum: page,
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
                    new myPagination({
                        id: 'pagination-message',
                        curPage: data.data.pageNum, //初始页码
                        pageTotal: data.data.pageTotal, //总页数
                        pageAmount: data.data.pageSize,  //每页多少条
                        dataTotal: data.data.dataTotal, //总共多少条数据
                        pageSize: 5, //可选,分页个数
                        // showPageTotalFlag: true, //是否显示数据统计
                        // showSkipInputFlag: true, //是否支持跳转
                        getPage: function (page) {
                            //获取当前页数
                            flushMessage(content, page);
                        }
                    });
                }
            }
        }
    });
}

// 刷新我的评论帖子
function flushReviewMessage(content, page) {
    var userId = sessionStorage.getItem("userId");

    var my_review_message_list = $('#my-review-message-list');
    my_review_message_list.html('');
    $.ajax({
        url: '/message/getMyReviewMessage',
        type: 'POST',
        cache: false,
        data: {
            userId: userId,
            content: content,
            pageNum: page,
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
                    new myPagination({
                        id: 'pagination-review-message',
                        curPage: data.data.pageNum, //初始页码
                        pageTotal: data.data.pageTotal, //总页数
                        pageAmount: data.data.pageSize,  //每页多少条
                        dataTotal: data.data.dataTotal, //总共多少条数据
                        pageSize: 5, //可选,分页个数
                        // showPageTotalFlag: true, //是否显示数据统计
                        // showSkipInputFlag: true, //是否支持跳转
                        getPage: function (page) {
                            //获取当前页数
                            flushReviewMessage(content, page);
                        }
                    });
                }
            }
        }
    });
}
function toReview(messageId) {
    sessionStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}
