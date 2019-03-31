$(function () {

    var userId = sessionStorage.getItem('userId') || '';
    var userName = sessionStorage.getItem('userName') || '';

    if (userId && userName && userId !== '' && userName !== '') {
        $('#user-info').html('管理员：' + userName);

        // 退出
        $('#user-layout').on('click', function() {
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('role');
            window.location.href = 'manage-login.html';
        });

        $('#menu-top-menu').on('click', 'li', function () {
            $(this).addClass('current-menu-item');
        });
    } else {
        window.location.href = 'manage-login.html';
    }
});