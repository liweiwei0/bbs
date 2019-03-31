package fun.lww.bbs.web;

import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.transform.Result;
import java.util.List;

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
    public ResultBean<User> login(@RequestParam("email") String email,
                                  @RequestParam("password") String password,
                                  @RequestParam(value = "role", required = false) String role) {
        return userService.login(email, password, role);
    }

    /**
     * 注册
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResultBean<User> register(UserVo userVo) {
        return userService.register(userVo);
    }

    /**
     * 所有用户
     */
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResultBean<List<User>> all() {
        return new ResultBean<>(userService.all());
    }

    /**
     * 分页查询
     */
    @RequestMapping(value = "/findByCondition", method = RequestMethod.POST)
    public ResultBean<PageBean<List<User>>> findByCondition(UserVo userVo) {
        return new ResultBean<>(userService.findByCondition(userVo));
    }

    /**
     * 按ID查询
     */
    @RequestMapping(value = "/getById", method = RequestMethod.GET)
    public ResultBean<User> getById(Integer id) {
        return new ResultBean<>(userService.getById(id));
    }

    /**
     * 删除用户
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultBean<String> update(UserVo userVo) {
        return userService.update(userVo);
    }

    /**
     * 删除用户
     */
    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public ResultBean<String> delete(Integer id) {
        return userService.delete(id);
    }
}
