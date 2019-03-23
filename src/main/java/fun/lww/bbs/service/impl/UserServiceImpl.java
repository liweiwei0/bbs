package fun.lww.bbs.service.impl;

import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.entity.User;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.vo.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public String login(User user) {
        if (null == user
            || StringUtils.isEmpty(user.getEmail())
            || StringUtils.isEmpty(user.getPassword())) {
            return "必填项不能为空";
        }
        User user1 = userDao.findByEmailAndPassword(user.getEmail(), user.getPassword());
        return user1 != null ? "登陆成功" : "登陆失败";
    }

    @Override
    public String register(UserVo userVo) {
        if (null == userVo || StringUtils.isEmpty(userVo.getName())
                || StringUtils.isEmpty(userVo.getEmail())
                || StringUtils.isEmpty(userVo.getPassword())
                || StringUtils.isEmpty(userVo.getPassword1())) {
            return "必填项不能为空";
        }
        if (!userVo.getPassword().equals(userVo.getPassword1())) {
            return "确认密码错误";
        }
        User existUser = userDao.findByNameOrEmail(userVo.getName(), userVo.getEmail());
        if (null != existUser) {
            return "用户已存在";
        }
        User user = new User(userVo);
        user.setCreateTime(new Date());
        user.setModifyTime(new Date());
        userDao.save(user);
        return "注册成功";
    }

    @Override
    public User getUser(String email, String password) {
        return userDao.findByEmailAndPassword(email, password);
    }

}
