package fun.lww.bbs.dao;

import fun.lww.bbs.bean.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends BaseDao<User> {

    User findByEmail(@Param("email") String email);

}
