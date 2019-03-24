package fun.lww.bbs.service;

import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.UserVo;

public interface UserService {

    ResultBean<User> register(UserVo userVo);

    ResultBean<User> login(String email, String password);
}
