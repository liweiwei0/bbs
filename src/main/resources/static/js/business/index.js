$(function () {
    // 刷新精选内容
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
                        + "<span class='like-count'>" + v.heat + "</span></li>");
                });
            }
        }
    });

    // 刷新最新消息
    var latest = $('#latest-ul');
    $.ajax({
        url: '/message/getLatest',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    latest.append("<li class='article-entry standard'>"
                        + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='javascript:void(0);' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>");
                });
            }
        }
    });

    // 刷新标签
    var tag = $('#tag-div');
    $.ajax({
        url: '/tag/list',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    tag.append("<a href='javascript:void(0);' class='btn btn-mini'>" + v.name + "</a>")
                });
            }
        }
    });
});

function toReview(messageId) {
    sessionStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}