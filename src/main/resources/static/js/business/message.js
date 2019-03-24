$(function () {
    // 保存帖子
    $('#save-message').on('click', function () {
        var userId = localStorage.getItem("userId");
        var title = $('#title').val();
        var comment = $('#comment').val();
        var tags = document.getElementsByName("tags");
        for (i in tags) {
            if (tags[i].checked) {
                console.log(tags[i]);
            }
        }

        if (undefined === title || '' === title) {
            alert("标题不能为空");
            return;
        }
        if (undefined === comment || '' === comment) {
            alert("内容不能为空");
            return;
        }
        if (undefined === userId || '' === userId) {
            alert("请先登录");
            return;
        }
        $.ajax({
            url: '/msg/save',
            type: 'POST',
            data: {
                userId: userId,
                title: title,
                tags: tags,
                comment: comment
            },
            cache: false,
            success: function (data) {
                alert(data);
                window.location.href = "index.html";
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
                        + "<a href='javascript:void(0);' class='btn btn-mini' onclick='checkTag(this)'>" + v.name + "</a>  ");
                });
            }
        }
    });
});

function checkTag(el) {
    var tagCheck = $(el).prev();
    // TODO 无法取消选择
    if (tagCheck.checked == true) {
        tagCheck.removeItem('checked');
    } else {
        tagCheck.attr('checked', 'checked');
    }
}