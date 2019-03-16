$(function () {


    $('#register').on('click', function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var password1 = $('#password1').val();
        if (password != password1) {
            setTimeout(function () {
                console.log("123");
            }, 1000);
        }
        $.ajax({
            url: '/user/register',
            type: 'POST',
            data: {
                name: name,
                email: email,
                password: password
            },
            cache: false,
            success: function (data) {
                if (data) {
                    console.log(data);
                }
            }
        });
    });
});