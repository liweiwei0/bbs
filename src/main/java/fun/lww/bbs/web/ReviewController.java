package fun.lww.bbs.web;

import fun.lww.bbs.entity.Review;
import fun.lww.bbs.service.ReviewService;
import fun.lww.bbs.vo.ReviewVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 评论回复管理
 * create by liweiwei on 2019/03/16
 */
@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    /**
     * 查找评论列表
     */
    @RequestMapping(value = "/getReview", method = RequestMethod.GET)
    public List<Review> getReviewByMsgId(Integer msgId) {
        return reviewService.getReviewByMsgId(msgId);
    }

    /**
     * 保存评论信息
     */
    @RequestMapping(value = "/saveReview", method = RequestMethod.POST)
    public String saveReview(ReviewVo reviewVo) {
        return reviewService.save(reviewVo);
    }
}
