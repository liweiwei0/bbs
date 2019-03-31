$(function () {
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

    // 获取帖子
    var messageId = sessionStorage.getItem("messageId");
    if (messageId && messageId !== '') {
        $.ajax({
            url: '/message/getMessage?id=' + messageId,
            type: 'GET',
            cache: false,
            success: function (data) {
                if (data && data.code === 1) {
                    var message = data.data;
                    $('#title').val(message.title);
                    $('#comment').html(message.content);
                    var tags = message.tag.split(" & ");
                    $('#tag-div a').each(function () {
                        if (tags && tags.length > 0) {
                            for (index in tags) {
                                if (tags[index] === this.text) {
                                    $(this).prev().prop('checked', true);
                                    break;
                                }
                            }
                        }
                    });
                }
            }
        });
    }

    // 保存帖子
    $('#save-message').on('click', function () {
        var userId = sessionStorage.getItem("userId") || '';
        var role = sessionStorage.getItem("role") || '';
        var messageId = sessionStorage.getItem("messageId");
        var title = $('#title').val();
        var comment = $('#comment').val();
        var tags = document.getElementsByName("tags");
        var tag = '';
        for (i in tags) {
            if (tags[i].checked) {
                tag += tags[i].value + " & ";
            }
        }

        if (undefined === title || null == title || '' === title) {
            alert("标题不能为空");
            return;
        }
        if (undefined === comment || null == comment || '' === comment) {
            alert("内容不能为空");
            return;
        }
        if (undefined === userId || null == userId || '' === userId) {
            alert("请先登录");
            return;
        }

        var url;
        if (undefined === messageId || null == messageId || '' === messageId) {
            url = '/message/save';
        } else {
            url = '/message/update';
        }

        $.ajax({
            url: url,
            type: 'POST',
            data: {
                id: messageId,
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
                        if (role === 'user') {
                            window.location.href = "index.html";
                        } else if (role === 'manage') {
                            window.location.href = "manage.html";
                        }
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    });

});

function checkTag(el) {
    var tagCheck = $(el).prev();
    if (tagCheck.prop('checked')) {
        tagCheck.prop('checked', false);
    } else {
        tagCheck.prop('checked', true);
    }
}

