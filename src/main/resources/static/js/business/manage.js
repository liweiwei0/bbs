$(function () {

    initMessage();

    // 发帖
    $('#new_add').on('click', function () {
        var model = sessionStorage.getItem('model') || '';
        if (model === 'message') {
            window.location.href = 'manage-message.html';
        } else if (model === 'tag') {
            $('#show_tbody tr:eq(0)').before('<tr style="height:47px"><td>0</td><td><input id=\'tag-add-name\' style="width:100%" placeholder=\'请输入名称\' value=\'\'/></td><td></td><td></td><td><a href=\'javascript:void(0);\' class=\'edit\' onclick=\'list_add()\'>保存</a></td></tr>');
        } else if (model === 'user') {
            $('#show_tbody tr:eq(0)').before('<tr style="height:47px"><td>0</td><td><input id=\'user-add-name\' style="width:100%" placeholder=\'请输入用户名\' value=\'\'/></td><td><input style="width:100%" id=\'user-add-email\' placeholder=\'请输入邮箱\' value=\'\'/></td><td><select style="width:100%" id=\'user-add-role\'><option value=\'\'>请选择角色</option><option value=\'普通用户\'>普通用户</option><option value=\'管理员\'>管理员</option></select></td><td><input style="width:100%" id=\'user-add-password\' placeholder=\'请输入密码\' value=\'\'/></td><td><input style="width:100%" id=\'user-add-password1\' placeholder=\'请确认密码\' value=\'\'/></td><td><a href=\'javascript:void(0);\' class=\'edit\' onclick=\'list_add()\'>保存</a></td></tr>');
        }

    });
});

// 加载帖子model
function initMessage() {
    sessionStorage.setItem('model', 'message');

    $('#search-div').html('');
    $('#search-div').append("<div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>标题：</span>\n" +
        "                        <input id=\"message-title\" type=\"text\" class=\"form-control\" placeholder=\"请输入标题\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>内容：</span>\n" +
        "                        <input id=\"message-content\" type=\"text\" class=\"form-control\" placeholder=\"请输入内容\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>标签：</span>\n" +
        "                        <select id=\"message-tag\" class=\"form-control select_down\" style=\"font-size: 13px; color: #666;\">\n" +
        "                        </select>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>作者：</span>\n" +
        "                        <select id=\"message-user\" class=\"form-control select_down\" style=\"font-size: 13px; color: #666;\">\n" +
        "                        </select>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <button class=\"btn btn-primary search_btn\" type=\"button\" id=\"search-btn\">查询</button>\n" +
        "                </div>");

    $('#tb').html('');
    $('#tb').append("<thead><tr><th>序号</th><th>标题</th><th>标签</th><th>内容</th><th>作者</th>"
        + "<th>创建时间</th><th>修改时间</th><th>操作</th></tr></thead>"
        + "<tbody id=\"show_tbody\"></tbody>");

    // 加载用户
    var message_user = $('#message-user');
    message_user.html('');
    message_user.append("<option value=''>请选择作者</option>");
    $.ajax({
        url: '/user/all',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.data.length > 0) {
                data.data.forEach(function (v) {
                    message_user.append("<option value='" + v.id + "'>" + v.name + "</option>");
                });
            }
        }
    });

    // 加载标签
    var message_tag = $('#message-tag');
    message_tag.html('');
    message_tag.append("<option value=''>请选择标签</option>");
    // 加载标签
    $.ajax({
        url: '/tag/list',
        type: 'GET',
        cache: false,
        success: function (data) {
            if (data && data.data.length > 0) {
                data.data.forEach(function (v) {
                    message_tag.append("<option value='" + v.name + "'>" + v.name + "</option>");
                });
            }
        }
    });

    flushMessage(1);

    initBtn();
}

// 刷新帖子
function flushMessage(page) {

    var title = $('#message-title').val() || '';
    var tag = $('#message-tag').val() || '';
    var content = $('#message-content').val() || '';
    var userId = $('#message-user').val() || '';

    var show_tbody = $('#show_tbody');
    show_tbody.html('');
    // 加载帖子
    $.ajax({
        url: '/message/findByCondition',
        type: 'POST',
        cache: false,
        data: {
            title: title,
            tag: tag,
            content: content,
            userId: userId,
            pageNum: page,
            pageSize: 10
        },
        success: function (data) {
            if (data && data.code === 1) {
                if (data.data &&  data.data.data && data.data.data.length > 0) {
                    var index = 0;
                    data.data.data.forEach(function (v) {
                        index++;
                        show_tbody.append("<tr><td>" + index + "</td><td>" + v.title + "</td>"
                            + "<td>" + v.tag + "</td>"
                            + "<td>" + v.content + "</td><td>" + v.userName + "</td>"
                            + "<td>" + v.createTime + "</td><td>" + v.modifyTime + "</td>"
                            + "<td><a href='javascript:void(0);' class='edit' onclick='list_edit(" + v.id + ")'>编辑</a>"
                            + "<a href='javascript:void(0);' class='del' onclick='list_del(" + v.id + ")'>删除</a></td></tr>");
                    });
                    new myPagination({
                        id: 'pagination-message',
                        curPage: data.data.pageNum, //初始页码
                        pageTotal: data.data.pageTotal, //总页数
                        pageAmount: data.data.pageSize,  //每页多少条
                        dataTotal: data.data.dataTotal, //总共多少条数据
                        pageSize: 5, //可选,分页个数
                        showPageTotalFlag: true, //是否显示数据统计
                        // showSkipInputFlag: true, //是否支持跳转
                        getPage: function (page) {
                            //获取当前页数
                            flushMessage(page);
                        }
                    });
                } else {
                    show_tbody.append("<tr><td colspan='8'>暂无数据</td></tr>");
                }
            } else {
                show_tbody.append("<tr><td colspan='8'>暂无数据</td></tr>");
            }
        }
    });
}

// 加载标签model
function initTag() {
    sessionStorage.setItem('model', 'tag');

    $('#search-div').html('');
    $('#search-div').append(
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>标签：</span>\n" +
        "<input id=\"tag-name\" type=\"text\" class=\"form-control\" placeholder=\"请输入内容\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <button class=\"btn btn-primary search_btn\" type=\"button\" id=\"search-btn\">查询</button>\n" +
        "                </div>");

    $('#tb').html('');
    $('#tb').append("<thead><tr><th>序号</th><th>标签名称</th><th>创建时间</th><th>修改时间</th><th>操作</th></tr></thead>"
        + "<tbody id=\"show_tbody\"></tbody>");

    flushTag(1);

    initBtn();
}

// 刷新标签
function flushTag(page) {

    var name = $('#tag-name').val() || '';

    var show_tbody = $('#show_tbody');
    show_tbody.html('');
    // 加载标签
    $.ajax({
        url: '/tag/findByCondition',
        type: 'POST',
        cache: false,
        data: {
            name: name,
            pageNum: page,
            pageSize: 10
        },
        success: function (data) {
            if (data && data.code === 1) {
                if (data.data &&  data.data.data && data.data.data.length > 0) {
                    var index = 0;
                    data.data.data.forEach(function (v) {
                        index++;
                        show_tbody.append("<tr><td>" + index + "</td><td>" + v.name + "</td>"
                            + "<td>" + v.createTime + "</td><td>" + v.modifyTime + "</td>"
                            + "<td><a href='javascript:void(0);' class='edit' onclick='list_edit(" + v.id + ")'>编辑</a>"
                            + "<a href='javascript:void(0);' class='del' onclick='list_del(" + v.id + ")'>删除</a></td></tr>");
                    });
                    new myPagination({
                        id: 'pagination-message',
                        curPage: data.data.pageNum, //初始页码
                        pageTotal: data.data.pageTotal, //总页数
                        pageAmount: data.data.pageSize,  //每页多少条
                        dataTotal: data.data.dataTotal, //总共多少条数据
                        pageSize: 5, //可选,分页个数
                        showPageTotalFlag: true, //是否显示数据统计
                        // showSkipInputFlag: true, //是否支持跳转
                        getPage: function (page) {
                            //获取当前页数
                            flushTag(page);
                        }
                    });
                } else {
                    show_tbody.append("<tr><td colspan='5'>暂无数据</td></tr>");
                }
            } else {
                show_tbody.append("<tr><td colspan='5'>暂无数据</td></tr>");
            }
        }
    });
}

// 加载用户model
function initUser() {
    sessionStorage.setItem('model', 'user');

    $('#search-div').html('');
    $('#search-div').append(
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>用户名：</span>\n" +
        "<input id=\"user-name\" type=\"text\" class=\"form-control\" placeholder=\"请输入用户名\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>邮箱：</span>\n" +
        "<input id=\"user-email\" type=\"text\" class=\"form-control\" placeholder=\"请输入邮箱\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <div class=\"input-group mb-3\">\n" +
        "                        <span>角色：</span>\n" +
        "                        <select id=\"user-role\" class=\"form-control select_down\" style=\"font-size: 13px; color: #666;\">\n" +
        "<option value=''>请选择角色</option><option value='普通用户'>普通用户</option><option value='管理员'>管理员</option>" +
        "                        </select>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"search_input\">\n" +
        "                    <button class=\"btn btn-primary search_btn\" type=\"button\" id=\"search-btn\">查询</button>\n" +
        "                </div>");

    $('#tb').html('');
    $('#tb').append("<thead><tr><th>序号</th><th>用户名</th><th>邮箱</th><th>角色</th>"
        + "<th>创建时间</th><th>修改时间</th><th>操作</th></tr></thead>"
        + "<tbody id=\"show_tbody\"></tbody>");

    flushUser(1);

    initBtn();
}

// 刷新用户
function flushUser(page) {

    var name = $('#user-name').val() || '';
    var email = $('#user-email').val() || '';
    var role = $('#user-role').val() || '';

    var show_tbody = $('#show_tbody');
    show_tbody.html('');
    // 加载用户
    $.ajax({
        url: '/user/findByCondition',
        type: 'POST',
        cache: false,
        data: {
            name: name,
            email: email,
            role: role,
            pageNum: page,
            pageSize: 10
        },
        success: function (data) {
            if (data && data.code === 1) {
                if (data.data &&  data.data.data && data.data.data.length > 0) {
                    var index = 0;
                    data.data.data.forEach(function (v) {
                        index++;
                        show_tbody.append("<tr><td>" + index + "</td><td>" + v.name + "</td><td>" + v.email + "</td>"
                            + "<td>" + v.role + "</td><td>" + v.createTime + "</td><td>" + v.modifyTime + "</td>"
                            + "<td><a href='javascript:void(0);' class='edit' onclick='list_edit(" + v.id + ")'>编辑</a>"
                            + "<a href='javascript:void(0);' class='del' onclick='list_del(" + v.id + ")'>删除</a></td></tr>");
                    });
                    new myPagination({
                        id: 'pagination-message',
                        curPage: data.data.pageNum, //初始页码
                        pageTotal: data.data.pageTotal, //总页数
                        pageAmount: data.data.pageSize,  //每页多少条
                        dataTotal: data.data.dataTotal, //总共多少条数据
                        pageSize: 5, //可选,分页个数
                        showPageTotalFlag: true, //是否显示数据统计
                        // showSkipInputFlag: true, //是否支持跳转
                        getPage: function (page) {
                            //获取当前页数
                            flushTag(page);
                        }
                    });
                } else {
                    show_tbody.append("<tr><td colspan='7'>暂无数据</td></tr>");
                }
            } else {
                show_tbody.append("<tr><td colspan='7'>暂无数据</td></tr>");
            }
        }
    });
}

function checkModel(model) {
    if (model === 'message') {
        initMessage();
    } else if (model === 'tag') {
        initTag();
    } else if (model === 'user') {
        initUser();
    }
}

// 查询按钮
function initBtn() {
    $('#search-btn').on('click', function () {
        var model = sessionStorage.getItem('model');
        if (model === 'message') {
            flushMessage(1);
        } else if (model === 'tag') {
            flushTag(1);
        } else if (model === 'user') {
            flushUser(1);
        }
    });
}

// 添加
function list_add(iid) {
    var url;
    var model = sessionStorage.getItem('model');
    if (model === 'tag') {
        var tag_name = $('#tag-add-name').val() || '';
        if (undefined === tag_name || null === tag_name || tag_name === '') {
            alert('标签名称不能为空');
            return;
        }

        if (undefined !== iid && null !== iid && iid !== '') {
            url = '/tag/update';
        } else {
            url = '/tag/save';
        }

        $.ajax({
            url: url,
            type: 'POST',
            data: {
                id: iid,
                name: tag_name
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        alert(data.msg);
                        flushTag(1);
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    } else if (model === 'user') {
        var user_name = $('#user-add-name').val() || '';
        var email = $('#user-add-email').val() || '';
        var role = $('#user-add-role').val() || '';
        var password = $('#user-add-password').val() || '';
        var password1 = $('#user-add-password1').val() || '';
        if (undefined === user_name || null === user_name || user_name === '') {
            alert('用户名不能为空');
            return;
        }
        if (undefined === email || null === email || email === '') {
            alert('邮箱不能为空');
            return;
        }
        if (undefined === role || null === role || role === '') {
            alert('角色不能为空');
            return;
        }
        if (undefined === password || null === password || password === '') {
            alert('密码不能为空');
            return;
        }
        if (undefined === password1 || null === password1 || password1 === '') {
            alert('确认密码不能为空');
            return;
        }
        if (password !== password1) {
            alert('确认密码错误');
            return;
        }

        if (undefined !== iid && null !== iid && iid !== '') {
            url = '/user/update';
        } else {
            url = '/user/register';
        }

        $.ajax({
            url: url,
            type: 'POST',
            data: {
                id: iid,
                name: user_name,
                email: email,
                role: role,
                password: password,
                password1: password1
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.code === 1) {
                        alert(data.msg);
                        flushUser(1);
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    }
}

// 编辑
function list_edit(id) {
    var model = sessionStorage.getItem('model');
    if (model === 'message') {
        sessionStorage.setItem('messageId', id);
        window.location.href = 'manage-review.html';
    } else if (model === 'tag') {
        $.ajax({
            url: '/tag/getById',
            type: 'GET',
            data: {
                id: id
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.data && data.code === 1) {
                        var tag = data.data;
                        $('#show_tbody tr:eq(0)').before("<tr style='height:47px'><td>0</td>" +
                            "<td><input id='tag-add-name' style='width:100%' placeholder='请输入名称' value='" + tag.name + "'/></td>" +
                            "<td></td><td></td>" +
                            "<td><a href='javascript:void(0);' class='edit' onclick='list_add(" + tag.id + ")'>保存</a></td></tr>");
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    } else if (model === 'user') {
        $.ajax({
            url: '/user/getById',
            type: 'GET',
            data: {
                id: id
            },
            cache: false,
            success: function (data) {
                if (data) {
                    if (data.data && data.code === 1) {
                        var user = data.data;
                        var tr = "<tr style='height:47px'><td>0</td>" +
                            "<td><input id='user-add-name' style='width:100%' placeholder='请输入用户名' value='" + user.name + "'/></td>" +
                            "<td><input style='width:100%' id='user-add-email' placeholder='请输入邮箱' value='" + user.email + "'/></td>" +
                            "<td><select style='width:100%' id='user-add-role'>" +
                            "<option value=''>请选择角色</option>";
                        if (user.role && user.role === '管理员') {
                            tr += "<option value='普通用户'>普通用户</option><option value='管理员' selected>管理员</option>";
                        } else if (user.role && user.role === '普通用户') {
                            tr += "<option value='普通用户' selected>普通用户</option><option value='管理员'>管理员</option>";
                        } else {
                            tr += "<option value='普通用户'>普通用户</option><option value='管理员'>管理员</option>";
                        }
                        tr += "</select></td>" +
                            "<td><input style='width:100%' id='user-add-password' placeholder='请输入密码' value=''/></td>" +
                            "<td><input style='width:100%' id='user-add-password1' placeholder='请确认密码' value=''/></td>" +
                            "<td><a href='javascript:void(0);' class='edit' onclick='list_add(" + user.id + ")'>保存</a></td></tr>";

                        $('#show_tbody tr:eq(0)').before(tr);
                    } else if (data.code === 2) {
                        alert(data.msg);
                    }
                }
            }
        });
    }
}

// 删除
function list_del(id) {
    var model = sessionStorage.getItem('model');
    if (confirm('确定要删除么？')) {
        if (model === 'message') {
            $.ajax({
                url: '/message/del',
                type: 'POST',
                data: {
                    id: id
                },
                cache: false,
                success: function (data) {
                    if (data) {
                        if (data.code === 1) {
                            flushMessage(1);
                        } else if (data.code === 2) {
                            alert(data.msg);
                        }
                    }
                }
            });
        } else if (model === 'tag') {
            $.ajax({
                url: '/tag/del',
                type: 'POST',
                data: {
                    id: id
                },
                cache: false,
                success: function (data) {
                    if (data) {
                        if (data.code === 1) {
                            flushTag(1);
                        } else if (data.code === 2) {
                            alert(data.msg);
                        }
                    }
                }
            });
        } else if (model === 'user') {
            $.ajax({
                url: '/user/del',
                type: 'POST',
                data: {
                    id: id
                },
                cache: false,
                success: function (data) {
                    if (data) {
                        if (data.code === 1) {
                            flushUser(1);
                        } else if (data.code === 2) {
                            alert(data.msg);
                        }
                    }
                }
            });
        }
    }
}

