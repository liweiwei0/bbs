package fun.lww.bbs.service.impl;

import com.google.common.collect.Lists;
import fun.lww.bbs.bean.Message;
import fun.lww.bbs.bean.Review;
import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.MessageDao;
import fun.lww.bbs.dao.ReviewDao;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.service.ReviewService;
import fun.lww.bbs.vo.ReviewVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Review> getReviewByMessageId(Integer messageId) {
        if (null == messageId) {
            return Lists.newArrayList();
        }
        return reviewDao.findByMessageId(messageId);
    }

    @Override
    public ResultBean<String> save(ReviewVo reviewVo) {
        if (null == reviewVo || null == reviewVo.getMessageId() || null == reviewVo.getUserId()) {
            return new ResultBean<>(2, "评论失败");
        }
        if (StringUtils.isEmpty(reviewVo.getContent())) {
            return new ResultBean<>(2, "评论失败，评论内容不能为空");
        }
        User user = userDao.findById(reviewVo.getUserId());
        if (null == user) {
            return new ResultBean<>(2, "评论失败，用户不存在");
        }
        Message message = messageDao.findById(reviewVo.getMessageId());
        if (null == message) {
            return new ResultBean<>(2, "评论失败，帖子不存在");
        }

        Review review = new Review();
        review.setUserId(user.getId());
        review.setContent(reviewVo.getContent());
        review.setMsgId(message.getId());
        reviewDao.insert(review);
        return new ResultBean<>(1,"评论成功");
    }

    @Override
    public ResultBean<String> update(ReviewVo reviewVo) {
        if (null == reviewVo || null == reviewVo.getId()
                || null == reviewVo.getMessageId() || null == reviewVo.getUserId()) {
            return new ResultBean<>(2, "更新失败");
        }
        if (StringUtils.isEmpty(reviewVo.getContent())) {
            return new ResultBean<>(2, "更新失败，评论内容不能为空");
        }
        User user = userDao.findById(reviewVo.getUserId());
        if (null == user) {
            return new ResultBean<>(2, "更新失败，用户不存在");
        }
        Message message = messageDao.findById(reviewVo.getMessageId());
        if (null == message) {
            return new ResultBean<>(2, "更新失败，帖子不存在");
        }
        Review review = reviewDao.findById(reviewVo.getId());
        if (null == review) {
            return new ResultBean<>(2, "更新失败，评论不存在");
        }

        review.setContent(reviewVo.getContent());
        reviewDao.update(review);
        return new ResultBean<>(1, "更新成功");
    }

    @Override
    public ResultBean<String> delete(Integer id) {
        if (null == id) {
            return new ResultBean<>(2, "删除失败，评论不存在");
        }
        reviewDao.delete(id);
        return new ResultBean<>(1, "删除成功");
    }
}
