$(function () {
    var content = sessionStorage.getItem('content') || '';
    $('#s').val(content);
    // 刷新精选内容
    flushFeatured(content, '');

    // 刷新最新消息
    flushLatest(content, '');

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

    $('#message').on('click', function () {
        sessionStorage.removeItem("messageId");
        window.location.href = 'message.html';
    });

    // 查询
    $('#search').on('click', function () {
        var s = $('#s').val();
        sessionStorage.setItem('content', s);
    });

    $('#tag-div').on('click', 'a', function () {
        console.log(this);
        var content = sessionStorage.getItem('content') || '';
        flushFeatured(content, this.text);
        flushLatest(content, this.text);
    });
});

// 刷新精选内容
function flushFeatured(content, tag) {
    var featured = $('#featured-ul');
    featured.html('');
    $.ajax({
        url: '/message/getFeatured?content=' + content + "&tag=" + tag,
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
}

// 刷新最新内容
function flushLatest(content, tag) {
    var latest = $('#latest-ul');
    latest.html('');
    $.ajax({
        url: '/message/getLatest?content=' + content + "&tag=" + tag,
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
}

function toReview(messageId) {
    sessionStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}
