package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Review;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewDao extends BaseDao<Review> {

    List<Review> findByMessageId(Integer messageId);

}
