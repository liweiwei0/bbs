package fun.lww.bbs.service.impl;

import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.bean.User;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.vo.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.tomcat.util.security.MD5Encoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public ResultBean<User> login(String email, String password) {
        User user = userDao.findByEmail(email);
        if (null == user) {
            return new ResultBean<>(2, "用户不存在");
        }
        if (!MD5Encoder.encode(password.getBytes()).equals(user.getPassword())) {
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
        User existUser = userDao.findByEmail(userVo.getEmail());
        if (null != existUser) {
            return new ResultBean<>(2, "用户邮箱已注册");
        }
        User user = new User();
        user.setName(userVo.getName());
        user.setEmail(userVo.getEmail());
        user.setPassword(MD5Encoder.encode(userVo.getPassword().getBytes()));
        userDao.insert(user);
        return new ResultBean<>(1, "注册成功", user);
    }

}
