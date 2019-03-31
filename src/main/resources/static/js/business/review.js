$(function () {
    var messageId = sessionStorage.getItem("messageId");
    var userId = sessionStorage.getItem("userId");
    var role = sessionStorage.getItem("role") || '';

    // 获取精选内容
    var featured = $('#featured-ul');
    $.ajax({
        url: '/message/getFeatured',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                data.data.forEach(function (v) {
                    featured.append("<li class='article-entry standard'>"
                        + "<h4><a href='javascript:void(0);' onclick='toReview(" + v.id + ")'>" + v.title + "</a></h4>"
                        + "<span class='article-meta'>" + v.createTime + " in <a href='javascript:void(0);' title='"
                        + v.tag + "'>" + v.tag + "</a></span>"
                        + "<span class='like-count'>" + v.heat + "</span></li>")
                });
            }
        }
    });

    // 获取帖子
    $.ajax({
        url: '/message/getMessage?id=' + messageId,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                var message = data.data;
                $('#crumb-title').html(message.title);
                $('#msg-title').html(message.title);
                $('#msg-date').html(message.createTime);
                $('#msg-tag').html(message.tag);
                $('#msg-content').html(message.content);
                $('#msg-heat').html(message.heat);
                $('#add-heat').html(message.heat);

                var tags = message.tag.split(' & ');
                if (tags && tags.length > 0) {
                    for (index in tags) {
                        $('#tags-span').append("<a href=\"javascript:void(0);\" rel=\"tag\">" + tags[index] + "、 </a>");
                    }
                }

                if (role === 'manage') {
                    $('#post-title').append("<a href=\"javascript:void(0);\" class=\"post-title-edit-delete\" onclick=\"delMessage()\">删除</a>"
                        + "<a href=\"javascript:void(0);\" class=\"post-title-edit-delete\" onclick=\"editMessage()\">编辑</a>");
                } else {
                    if (userId != null && message.userId != null && parseInt(userId) === parseInt(message.userId)) {
                        $('#post-title').append("<a href=\"javascript:void(0);\" class=\"post-title-edit-delete\" onclick=\"delMessage()\">删除</a>"
                            + "<a href=\"javascript:void(0);\" class=\"post-title-edit-delete\" onclick=\"editMessage()\">编辑</a>");
                    }
                }
            }
        }
    });

    // 获取评论
    var review = $('#msg-review');
    $.ajax({
        url: '/review/getReview?messageId=' + messageId,
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.code === 1) {
                var i = 0;
                var reviewContent = {};
                data.data.forEach(function (v) {
                    i++;
                    if (role === 'manage') {
                        reviewContent[v.id] = v.content;
                        review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                            + "<article id='comment-4'><a href='javascript:void(0);'><img alt='' src='data:image/jpeg;base64,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'"
                            + " class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                            + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                            + v.userName + "</a></cite><a class='comment-reply-link' href='javascript:void(0);'>" + "" + "</a>"
                            + "</h5><p class='date'><a href='javascript:void(0)'>"
                            + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a>"
                            + "<a href='javascript:void(0)' class='edit-review' onclick='delReview(\"" + v.id + "\")'>删除</a>"
                            + "<a href='javascript:void(0)' class='edit-review' onclick='toEditReview(" + v.id + ")'>编辑</a>"
                            + "</p></div><div class='comment-body'><p>" + v.content + "</p></div></article></li>");
                    } else {
                        if (userId && v && parseInt(userId) === parseInt(v.userId)) {
                            reviewContent[v.id] = v.content;
                            review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                                + "<article id='comment-4'><a href='javascript:void(0);'><img alt='' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAPAA8AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/SDxHoLX93FNEAG2YcH2rzD4i+O9E+FvhHUPEviK7FnpdkuXIGXkY8KiDuxPAH54GTXp2txzaXp4vIJbm7kgYZBb7y96+Df+CnN7cT+GvBOm2yym1u7y4uZEkyPnRECgj/to9d2Gx8lTlF9FoeViMujVrRlH7T1/r5HhXxT/AOCifj/xNrF3F4OFt4W0bO2BhCk90y+rs4Kgn0VeOmT1rmPA37cvxj8PXqST+IU1223AtbanbRyK/wDwJQrj8GFdR+yt+zr4c+IE2oTeJ0fEJjEMIOA/ds+2MD8a6v4h/sLanBqs1z4Wls/sssrMkMx2iJOSOevoK86WYVHPWTPfjlNFQsoL9T63/Zw/aI0n9oDw+8iQjS9fs1H2zTS+4Af89I243KfzBOD2J9a1GDyYRNnmF1k49jz+ma+Kv2a/gJr3wg1VvFOt6nHDfw4KWNnyrxj74c9MsuR+Rr7ovLH7TbSRElA6kEivawmM+swal0PlMwwH1GtFx2eq8iHW4w1vbTdfLlH5H5f6iq/2Vm5xj2p0ds95oJPmOZPKyRn+If8A1xWrawI1vGwcsGGcmtcPU5IuL7mePpqU4z7o3rNNR1PRXS/iS1uXypRTkexr5b/bj+DetfEjwloN5o5jvbjQJZZ7iJvlJQqoIU+o2/pX1VqviSx0Y7LmbE2NwiUZYj+n415H4p8W6nZ2WoG2toJ7e4d2VJnAKhicgk8Y+or5mpKnC93qz7DD0pzkmlt3PlT4HW9t4U8B/wBu3m8bzISiJl1CsRtA7nIq3c/tdW8OtWuk2vhSe7luW2xFb+BpCOeTGpJB47/nW5o3iCTSNbPhnVdCmtLAQj7PNetFItzzzhkJVj0PrzyK35/Cngzw8kurxaPbW1wF3NMEwEyeT7deteSup9SoJ2RwXi79pLUtP8eWng7TfC6tqE4j806izhF3AHaPLRsnBHJIFfcqRF1DEY9vSvlnVtU8P3N7ba5pv2TUrtrUgTQKHf5VyMEc88jFfHXxI8e/GW9dR4x1DxRZw3DbFguxNbRMf7oQBVJ9sZr18FW9ipK3Y8LMMreYTjaaja+/6fcfpzqnxE8KeC2u4Nb8SaVpRSRiEuruNGIPzcKTk9a6jQ1S50yF0cOoBUMp4IBwD+WK/IPTPgp8Q9ctxcWvg/XLiOcZjlNnIA49Rkcj3r2+y/bU+N3wvsrbw3f/AAg1aaaxhjiE8um3QMyqoUPnbg52nkcV6cK+rcla55WNym1OEKU1Jrfp/mfani1FPjPVTE7gBYdp3En/AFS4P6muL8S6xrltqOn6B4f0KbXr29jlllXzTGkESAZd2/4EBjHJIHeumu5WuNX1W8cgBXWDOeuxQmf/AB0Vm+DPGjaTc69OJolupilvFK/VFXJbHryw/KvE9n7aryo9pTdGjzW2SPM/Dfhbw/8AF7w/caLpuoP4b1RCl9bXQAlRicNsdGPykccoV4b04rM8a+EPHXg6KOLVQqFU8pJoVE1tdn6kjacA/Kw9etTa9JL4V8Xf27p9siGQlLiOMbVkGc547+/fvnisn43+J/F/xH8CyNpBe303Stt1dJI4SR1AbBUk84OOOpyMZwa6qmE5YabrsTDGv2t18L6PoL8FPBt5rfim1hvGe0H72ZkhSKPyxgfPtXcM7tvUke2DXtmpajeWsNpqkuI7q2kNlqSxDCvsIBOPQjaw9m9q8R/Zr+I3gfwL9oTV/EqS6xdy+XLeCOSW3LIFJRZFUqAvmAEnGTkduPoeW+0bxJeTPpl/ZanY36bnktJ1lUSKMclSeSvH4V2Yal7OGu7OLGVnVqttWN+4tYW1CGbzD5EUCsm3oQeQPyzV2a7mTYIpCVwef+BEVh+Hi8FqdPlYvJaHy1c9WjxlD+WR+BqydQELMhUOQeprrseczntMtzdeHQ0wG+TfI3qSTmuXVX0mxg2wIbRVyV8sd+SeOv8AOvRf7CtYbBoow6Ko2jDZx+dcxewpY2kKxD5digg9G4HX8687C03Tk7no4ioppWPOPFL26WjXa25+xkYl8v5to9cVXvdNudf+HniXTNDljF+9nFPHKc7SBIHA4IPITsR1HNdVdxJDdT26qPJddxXHFavg3SLS0g1CKGFY4xaMQq8dq9GS0ONNxd0eQfCXWrXXdV0Nr3TpNN1y6hdZGMiv56RbP3m9SGKZlAAkXOSQCe/0eNJht/szpCkcokUl1UAn1ya+aPA+lW9lr/iK+jU/aFtYLZCT/q0T7RJhfTLBSfXaPSvpDwpqMviDwboGoXYVri6tYp5NowCxQE/rSjfY6cTaXLU77mxB4eutQ1E3Nq0UaqgSTzGx3JH82H41ek+G73LmSTUSjH+GNDgfrVjw1DH5twNgwFz+RrolYxjavAHandnAf//Z'"
                                + " class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                                + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                                + v.userName + "</a></cite><a class='comment-reply-link' href='javascript:void(0);'>" + "" + "</a>"
                                + "</h5><p class='date'><a href='javascript:void(0)'>"
                                + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a>"
                                + "<a href='javascript:void(0)' class='edit-review' onclick='delReview(\"" + v.id + "\")'>删除</a>"
                                + "<a href='javascript:void(0)' class='edit-review' onclick='toEditReview(" + v.id + ")'>编辑</a>"
                                + "</p></div><div class='comment-body'><p>" + v.content + "</p></div></article></li>");
                        } else {
                            review.append("<li class='comment even thread-odd thread-alt depth-1' id='li-comment-4'>"
                                + "<article id='comment-4'><a href='javascript:void(0);'><img alt='' src='data:image/jpeg;base64,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'"
                                + " class='avatar avatar-60 photo' height='60' width='60'></a><div class='comment-meta'>"
                                + "<h5 class='author'><cite class='fn'><a href='javascript:void(0)' rel='external nofollow' class='url'>"
                                + v.userName + "</a></cite><a class='comment-reply-link' href='javascript:void(0);'>" + "" + "</a>"
                                + "</h5><p class='date'><a href='javascript:void(0)'>"
                                + "<time datetime='" + v.createTime + "'>" + v.createTime + "</time></a>"
                                + "</p></div><div class='comment-body'><p>" + v.content + "</p></div></article></li>");

                        }
                    }
                });
                $('#msg-review-count').html(i + " 评论");
                sessionStorage.setItem("reviewContent", JSON.stringify(reviewContent));
            }
        }
    });

    // 保存评论
    $('#save-review').on('click', function () {
        var messageId = sessionStorage.getItem("messageId");
        var userId = sessionStorage.getItem("userId");
        var comment = $('#comment').val();
        if (undefined === messageId || null === messageId || '' === messageId) {
            alert("页面超时，请刷新后评论");
            return;
        }
        if (undefined === userId || null === userId || '' === userId) {
            alert("登陆后才可以发表评论");
            return;
        }
        if (undefined === comment || null === comment || '' === comment) {
            alert("评论不能为空");
            return;
        }

        var reviewId = sessionStorage.getItem("reviewId");
        var url;
        if (undefined === reviewId || null === reviewId || '' === reviewId) {
            url = "/review/save";
        } else {
            url = "/review/update";
        }
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                id: reviewId,
                messageId: messageId,
                userId: userId,
                content: comment
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        alert(data.msg);
                        sessionStorage.removeItem("reviewId");
                        window.location.reload();
                    } else if (data.code === 2) {
                        alert(data.msg)
                    }
                }

            }
        });
        sessionStorage.removeItem("reviewId");
    });

    // 点赞
    $('#add-heat').on('click', function () {
        var message_id = sessionStorage.getItem('messageId');
        var user_id = sessionStorage.getItem('userId');
        if (undefined === user_id || null === user_id || '' === user_id) {
            alert("登陆后才可以点赞哦 👍");
            return;
        }
        $.ajax({
            url: '/messageHeat/save',
            type: 'POST',
            data: {
                messageId: message_id,
                userId: user_id
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        var heat = parseInt($('#add-heat').text()) + 1;
                        $('#add-heat').text(heat);
                        $('#msg-heat').text(heat);
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    });

});

// 编辑帖子
function editMessage() {
    var role = sessionStorage.getItem('role') || '';
    if (role === 'manage') {
        window.location.href = "manage-message.html";
    } else {
        window.location.href = "message.html";
    }
}

// 删除帖子
function delMessage() {
    var messageId = sessionStorage.getItem("messageId");
    if (confirm("确认要删除这个帖子么？")) {
        $.ajax({
            url: '/message/del',
            type: 'POST',
            data: {
                id: messageId
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
    }
}

// 删除评论
function delReview(id) {
    if (confirm("确认要删除这个评论么？")) {
        $.ajax({
            url: '/review/del',
            type: 'POST',
            data: {
                id: id
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        alert(data.msg);
                        window.location.reload();
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    }
}

// 编辑评论
function toEditReview(id) {
    sessionStorage.setItem("reviewId", id);
    var reviewContent = JSON.parse(sessionStorage.getItem("reviewContent"));
    $('#comment').val(reviewContent[id]);
}

// 编辑评论
function toReview(messageId) {
    sessionStorage.setItem("messageId", messageId);
    window.location.href = "review.html";
}