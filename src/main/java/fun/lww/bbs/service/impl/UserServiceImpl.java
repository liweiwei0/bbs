package fun.lww.bbs.service.impl;

import fun.lww.bbs.common.MD5Util;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.bean.User;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.vo.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.jvm.hotspot.debugger.Page;

import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public ResultBean<User> login(String email, String password, String role) {
        User user = userDao.findByEmail(email, role);
        if (null == user) {
            return new ResultBean<>(2, "用户不存在");
        }
        if (!MD5Util.calc(password).equals(user.getPassword())) {
            return new ResultBean<>(2, "密码错误");
        }
        return new ResultBean<>(1, "登陆成功", user);
    }

    @Override
    public ResultBean<User> register(UserVo userVo) {
        if (null == userVo || StringUtils.isEmpty(userVo.getName())
                || StringUtils.isEmpty(userVo.getEmail())
                || StringUtils.isEmpty(userVo.getPassword())
                || StringUtils.isEmpty(userVo.getPassword1())) {
            return new ResultBean<>(2, "必填项不能为空");
        }
        if (!userVo.getPassword().equals(userVo.getPassword1())) {
            return new ResultBean<>(2, "确认密码错误");
        }
        User existUser = userDao.findByEmail(userVo.getEmail(), null);
        if (null != existUser) {
            return new ResultBean<>(2, "用户邮箱已注册");
        }
        User user = new User();
        user.setName(userVo.getName());
        user.setEmail(userVo.getEmail());
        user.setPassword(MD5Util.calc(userVo.getPassword()));
        user.setRole(userVo.getRole());
        if (StringUtils.isBlank(userVo.getRole())) {
            user.setRole("普通用户");
        }
        userDao.insert(user);
        return new ResultBean<>(1, "注册成功", user);
    }

    @Override
    public List<User> all() {
        return userDao.findAll();
    }

    @Override
    public PageBean<List<User>> findByCondition(UserVo userVo) {
        PageBean<List<User>> pageBean = new PageBean<>(userVo.getPageNum(), userVo.getPageSize());
        Integer count = userDao.findCountByCondition(userVo);
        if (null == count || count <= 0) {
            pageBean.setDataTotal(0);
            return pageBean;
        }
        pageBean.setDataTotal(count);

        List<User> list = userDao.findByCondition(userVo, pageBean.getStartRow(), pageBean.getPageSize());
        pageBean.setData(list);
        return pageBean;
    }

    @Override
    public ResultBean<String> delete(Integer id) {
        if (null == id) {
            return new ResultBean<>(2, "删除失败");
        }
        userDao.delete(id);
        return new ResultBean<>(1, "删除成功");
    }

    @Override
    public ResultBean<String> update(UserVo userVo) {
        if (null == userVo || StringUtils.isEmpty(userVo.getName())
                || StringUtils.isEmpty(userVo.getEmail())
                || StringUtils.isEmpty(userVo.getPassword())
                || StringUtils.isEmpty(userVo.getPassword1())) {
            return new ResultBean<>(2, "修改失败");
        }
        if (!userVo.getPassword().equals(userVo.getPassword1())) {
            return new ResultBean<>(2, "确认密码错误");
        }
        User existUser = userDao.findByEmail(userVo.getEmail(), null);
        if (null != existUser && !existUser.getId().equals(userVo.getId())) {
            return new ResultBean<>(2, "用户邮箱已注册");
        }
        User user = new User();
        user.setId(userVo.getId());
        user.setName(userVo.getName());
        user.setEmail(userVo.getEmail());
        user.setPassword(MD5Util.calc(userVo.getPassword()));
        user.setRole(userVo.getRole());
        if (StringUtils.isBlank(userVo.getRole())) {
            user.setRole("普通用户");
        }
        userDao.update(user);
        return new ResultBean<>(1, "修改成功");
    }

    @Override
    public User getById(Integer id) {
        if (null == id) {
            return null;
        }
        return userDao.findById(id);
    }

}
