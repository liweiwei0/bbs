$(function () {
    // 保存帖子
    $('#save-message').on('click', function () {
        var userId = sessionStorage.getItem("userId");
        var title = $('#title').val();
        var comment = $('#comment').val();
        var tags = document.getElementsByName("tags");
        var tag = '';
        for (i in tags) {
            if (tags[i].checked) {
                tag += tags[i].value + ' & ';
            }
        }

        if (undefined === title || null === title || '' === title) {
            alert("标题不能为空");
            return;
        }
        if (undefined === comment || null === comment || '' === comment) {
            alert("内容不能为空");
            return;
        }
        if (undefined === userId || null === userId || '' === userId) {
            alert("请先登录");
            return;
        }
        $.ajax({
            url: '/message/save',
            type: 'POST',
            data: {
                userId: userId,
                title: title,
                tag: tag,
                content: comment
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        alert(data.msg);
                        window.location.href = "index.html";
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    });

    // 标签
    var tag_div = $('#tag-div');
    $.ajax({
        url: '/tag/list',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    tag_div.append("<input type='checkbox' name='tags' value='" + v.name + "'/>"
                        + "<a href='javascript:void(0);' class='btn btn-mini' onclick='checkTag(this)'>" + v.name + "</a>");
                });
            }
        }
    });
});

function checkTag(el) {
    var tagCheck = $(el).prev();
    if (tagCheck.prop('checked')) {
        tagCheck.prop("checked", false);
    } else {
        tagCheck.prop("checked", true);
    }
}