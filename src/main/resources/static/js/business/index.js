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
                        + "<h4><a href='javascript:void(0);' onclick='toReview("+ v.id+")'>" + v.title + "</a></h4>"
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
                        + "<h4><a href='javascript:void(0);' onclick='toReview("+ v.id+")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='#' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>")
                });
            }
        }
    });
});

function toReview(msgId) {
    var userId = $('#userId').val();
    window.location.href = "single.html?id=" + msgId + "&userId=" + userId;
}

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

$(function () {
    $('#user-info').append("<p class='intro'>邮箱: <input type='text' id='login-email' value=''/></p>"
        + "<p class='intro'>密码: <input type='password' id='login-password' value=''/></p>"
        + "<p class='intro'><a href='javascript:void(0);' onclick='login()'>  登陆  </a>"
        + "<a href='javascript:void(0);' onclick='toRegister()'>  注册  </a></p>");
});

function login() {
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    $.ajax({
        url: '/user/login',
        type: 'POST',
        data: {
            email: email,
            password: password
        },
        cache: false,
        success: function (data) {
            if (data) {
                $('#user-info').html("<h3 class='title'>用户信息</h3><p class='intro'>用户: " + data.name + "</p>");
                $('#userId').val(data.id);
                $('#single-1').attr('href', "single-1.html?userId=" + data.id);
            }
        }
    });
}

function toRegister() {
    $('#user-info').html("<h3 class='title'>用户信息</h3>"
        + "<p class='intro'>用户名: <input type='text' id='login-name' value=''/></p>"
        + "<p class='intro'>邮箱: <input type='text' id='login-email' value=''/></p>"
        + "<p class='intro'>密码: <input type='password' id='login-password' value=''/></p>"
        + "<p class='intro'>确认密码: <input type='password' id='login-password1' value=''/></p>"
        + "<p class='intro'><a href='javascript:void(0);' onclick='register()'>  注册  </a></p>");
}

function register() {
    var name = $('#login-name').val();
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    var password1 = $('#login-password1').val();

    $.ajax({
        url: '/user/register',
        type: 'POST',
        data: {
            name: name,
            email: email,
            password: password,
            password1: password1,
        },
        cache: false,
        success: function (data) {
            if (data) {
                $('#user-info').html("<h3 class='title'>用户信息</h3><p class='intro'>用户: " + data.name + "</p>");
                $('#userId').value = data.id;
                $('#single-1').attr('href', "single-1.html?userId=" + data.id);
            }
        }
    });
}