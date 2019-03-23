package fun.lww.bbs.service;

import fun.lww.bbs.entity.User;
import fun.lww.bbs.vo.UserVo;

public interface UserService {

    String login(User user);

    String register(UserVo userVo);

    User getUser(String email, String password);
}
