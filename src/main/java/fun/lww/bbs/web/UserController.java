package fun.lww.bbs.web;

import fun.lww.bbs.bean.User;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResultBean<User> login(@RequestParam("email") String email, @RequestParam("password") String password) {
        return userService.login(email, password);
    }

    /**
     * 注册
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResultBean<User> register(UserVo userVo) {
        return userService.register(userVo);
    }

}
