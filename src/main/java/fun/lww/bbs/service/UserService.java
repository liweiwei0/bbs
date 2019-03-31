package fun.lww.bbs.service;

import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.UserVo;

import java.util.List;

public interface UserService {

    ResultBean<User> register(UserVo userVo);

    ResultBean<User> login(String email, String password, String role);

    List<User> all();

    PageBean<List<User>> findByCondition(UserVo userVo);

    ResultBean<String> delete(Integer id);

    ResultBean<String> update(UserVo userVo);

    User getById(Integer id);

}
