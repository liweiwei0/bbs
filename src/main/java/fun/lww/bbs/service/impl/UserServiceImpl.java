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
    public User login(User user) {
        if (null == user || StringUtils.isEmpty(user.getEmail()) || StringUtils.isEmpty(user.getPassword())) {
            return null;
        }
        return userDao.findByEmailAndPassword(user.getEmail(), user.getPassword());
    }

    @Override
    public User register(UserVo userVo) {
        if (null == userVo || StringUtils.isEmpty(userVo.getName())
                || StringUtils.isEmpty(userVo.getEmail())
                || StringUtils.isEmpty(userVo.getPassword())
                || StringUtils.isEmpty(userVo.getPassword1())) {
            return null;
        }
        if (!userVo.getPassword().equals(userVo.getPassword1())) {
            return null;
        }
        User user = new User(userVo);
        user.setCreateTime(new Date());
        user.setModifyTime(new Date());
        return userDao.save(user);
    }

}
