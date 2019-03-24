package fun.lww.bbs.service;

import fun.lww.bbs.bean.Review;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.ReviewVo;

import java.util.List;

public interface ReviewService {

    List<Review> getReviewByMessageId(Integer msgId);

    ResultBean<String> save(ReviewVo reviewVo);

    ResultBean<String> delete(Integer id);

    ResultBean<String> update(ReviewVo reviewVo);
}
