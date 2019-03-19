package fun.lww.bbs.service;

import fun.lww.bbs.entity.User;
import fun.lww.bbs.vo.UserVo;

public interface UserService {

    User login(User user);

    User register(UserVo userVo);
}
