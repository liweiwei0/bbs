package fun.lww.bbs.dao;

import fun.lww.bbs.bean.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends BaseDao<User> {

    User findByEmail(@Param("email") String email);

    List<User> findByIds(@Param("userIds") List<Integer> userIds);
}
