package fun.lww.bbs.service;

import fun.lww.bbs.entity.Review;
import fun.lww.bbs.vo.ReviewVo;

import java.util.List;

public interface ReviewService {

    List<Review> getReviewByMsgId(Integer msgId);

    String save(ReviewVo reviewVo);

    String delete(Integer id);
}
