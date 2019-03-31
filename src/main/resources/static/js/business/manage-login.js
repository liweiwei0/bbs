function login() {
    var email = $('#email').val() || '';
    var password = $('#password').val() || '';
    if (undefined === email || null === email || '' === email) {
        alert("邮箱不能为空");
        return;
    }
    if (undefined === password || null === password || '' === password) {
        alert("密码不能为空");
        return;
    }
    $.ajax({
        url: '/user/login',
        type: 'POST',
        data: {
            email: email,
            password: password,
            role: '管理员'
        },
        cache: false,
        success: function (data) {
            if (data) {
                if (data.code === 1) {
                    alert(data.msg);
                    sessionStorage.setItem("userId", data.data.id);
                    sessionStorage.setItem("userName", data.data.name);
                    sessionStorage.setItem("role", 'manage');
                    window.location.href = 'manage.html';
                } else if (data.code === 2) {
                    alert(data.msg);
                }
            }
        }
    });
}