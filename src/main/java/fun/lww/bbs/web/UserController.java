package fun.lww.bbs.web;

import fun.lww.bbs.entity.User;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.support.SimpleTriggerContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 用户管理
 * create by liweiwei on 2019/03/16
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 登陆
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(User user) {
        return userService.login(user);
    }

    /**
     * 注册
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(UserVo userVo) {
        return userService.register(userVo);
    }

    @RequestMapping(value = "/getUser", method = RequestMethod.POST)
    public User getUser(String email, String password) {
        return userService.getUser(email, password);
    }
}
