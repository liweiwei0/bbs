package fun.lww.bbs.service;

import fun.lww.bbs.entity.Tag;
import fun.lww.bbs.entity.User;
import fun.lww.bbs.vo.UserVo;

import java.util.List;

public interface UserService {

    User login(User user);

    User register(UserVo userVo);
}
