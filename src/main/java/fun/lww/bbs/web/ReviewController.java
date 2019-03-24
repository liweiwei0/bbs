package fun.lww.bbs.web;

import fun.lww.bbs.bean.Review;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.service.ReviewService;
import fun.lww.bbs.vo.ReviewVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResultBean<List<Review>> getReviewByMessageId(@RequestParam(value = "msgId") Integer messageId) {
        return new ResultBean<>(reviewService.getReviewByMessageId(messageId));
    }

    /**
     * 保存评论信息
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResultBean<String> save(ReviewVo reviewVo) {
        return reviewService.save(reviewVo);
    }

    /**
     * 修改评论信息
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultBean<String> update(ReviewVo reviewVo) {
        return reviewService.update(reviewVo);
    }

    /**
     * 删除评论信息
     */
    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public ResultBean<String> del(Integer id) {
        return reviewService.delete(id);
    }


}
