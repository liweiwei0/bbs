package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Review;

import java.util.List;

public interface ReviewDao extends BaseDao<Review> {

    List<Review> findByMessageId(Integer messageId);

}
