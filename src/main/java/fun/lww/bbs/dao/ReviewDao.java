package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Review;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewDao extends BaseDao<Review> {

    List<Review> findByMessageId(@Param("messageId") Integer messageId);

    List<Integer> findIdByUserId(@Param("userId") Integer userId);
}
