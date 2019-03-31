package fun.lww.bbs.dao;

import fun.lww.bbs.bean.User;
import fun.lww.bbs.vo.UserVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends BaseDao<User> {

    User findByEmail(@Param("email") String email, @Param("role") String role);

    List<User> findByIds(@Param("userIds") List<Integer> userIds);

    Integer findCountByCondition(UserVo userVo);

    List<User> findByCondition(@Param("userVo") UserVo userVo, @Param("startRow") int startRow, @Param("pageSize") int pageSize);

}
