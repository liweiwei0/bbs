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
    var featured = $('#latest-ul');
    $.ajax({
        url: '/msg/getLatest',
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
    var featured = $('#tag-div');
    $.ajax({
        url: '/tag/list',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data) {
                data.forEach(function(v){
                    featured.append("<a href='#' class='btn btn-mini'>" + v.name + "</a>")
                });
            }
        }
    });
});