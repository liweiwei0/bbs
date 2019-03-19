$(function () {
    // 刷新精选内容
    var featured = $('#featured-ul');
    $.ajax({
        url: '/msg/getFeatured',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function (v) {
                    featured.append("<li class='article-entry standard'>"
                        + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='#' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>");
                });
            }
        }
    });

    // 刷新最新消息
    var latest = $('#latest-ul');
    $.ajax({
        url: '/msg/getLatest',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function (v) {
                    latest.append("<li class='article-entry standard'>"
                        + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='#' title='"
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
            if (data) {
                data.forEach(function (v) {
                    tag.append("<a href='#' class='btn btn-mini'>" + v.name + "</a>")
                });
            }
        }
    });
});

function toReview(msgId) {
    localStorage.setItem("msgId", msgId);
    window.location.href = "review.html";
}