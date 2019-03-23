$(function () {
    var userId = localStorage.getItem("userId");
    var userName = localStorage.getItem("userName");
    if (userId && userName) {
        $('#user-info').html("<h3 class='title'>用户信息</h3><p class='intro'>用户: " + userName
            + "</p><p class='intro'><a href='javascript:void(0);' onclick='layout()'>  登出  </a></p>");
        $('#userId').value = userId;
        $('#single-1').attr('href', "msg.html?userId=" + userId);
    } else {
        $('#user-info').append("<p class='intro'>邮箱: <input type='text' id='login-email' value=''/></p>"
            + "<p class='intro'>密码: <input type='password' id='login-password' value=''/></p>"
            + "<p class='intro'><a href='javascript:void(0);' onclick='login()'>  登陆  </a>"
            + "<a href='javascript:void(0);' onclick='toRegister()'>  注册  </a></p>");
    }
});

function toRegister() {
    $('#user-info').html("<h3 class='title'>用户信息</h3>"
        + "<p class='intro'>用户名: <input type='text' id='login-name' value=''/></p>"
        + "<p class='intro'>邮箱: <input type='text' id='login-email' value=''/></p>"
        + "<p class='intro'>密码: <input type='password' id='login-password' value=''/></p>"
        + "<p class='intro'>确认密码: <input type='password' id='login-password1' value=''/></p>"
        + "<p class='intro'><a href='javascript:void(0);' onclick='register()'>  注册  </a>"
        + "<a href='javascript:void(0);' onclick='toLogin()'>  返回  </a></p>");
}

function toLogin() {
    $('#user-info').html("<h3 class='title'>用户信息</h3>"
        + "<p class='intro'>邮箱: <input type='text' id='login-email' value=''/></p>"
        + "<p class='intro'>密码: <input type='password' id='login-password' value=''/></p>"
        + "<p class='intro'><a href='javascript:void(0);' onclick='login()'>  登陆  </a>"
        + "<a href='javascript:void(0);' onclick='toRegister()'>  注册  </a></p>");
}

function layout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    window.location.reload();
}

function login() {
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    if (undefined === email || '' === email) {
        alert("邮箱不能为空");
        return;
    }
    if (undefined === password || '' === password) {
        alert("密码不能为空");
        return;
    }
    $.ajax({
        url: '/user/login',
        type: 'POST',
        data: {
            email: email,
            password: password
        },
        cache: false,
        success: function (data) {
            if (data && data === '登陆成功') {
                getUser(email, password);
            } else {
                alert(data);
            }
        }
    });
}

function getUser(email, password) {
    $.ajax({
        url: '/user/getUser',
        type: 'POST',
        data: {
            email: email,
            password: password
        },
        cache: false,
        success: function (data) {
            localStorage.setItem("userId", data.id);
            localStorage.setItem("userName", data.name);
            window.location.reload();
        }
    });
}

function register() {
    var name = $('#login-name').val();
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    var password1 = $('#login-password1').val();

    if (undefined === name || '' === name) {
        alert("用户名不能为空");
        return;
    }
    if (undefined === email || '' === email) {
        alert("邮箱不能为空");
        return;
    }
    if (undefined === password || '' === password) {
        alert("密码不能为空");
        return;
    }
    if (undefined === password1 || '' === password1) {
        alert("确认密码不能为空");
        return;
    }

    $.ajax({
        url: '/user/register',
        type: 'POST',
        data: {
            name: name,
            email: email,
            password: password,
            password1: password1
        },
        cache: false,
        success: function (data) {
            console.log(data);
            if (data && data === '注册成功') {
                // window.location.reload();
            } else {
                alert(data);
            }

        }
    });
}