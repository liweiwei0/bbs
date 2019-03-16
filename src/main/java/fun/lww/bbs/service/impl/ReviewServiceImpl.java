package fun.lww.bbs.service.impl;

import fun.lww.bbs.dao.MsgDao;
import fun.lww.bbs.dao.ReviewDao;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.entity.Msg;
import fun.lww.bbs.entity.Review;
import fun.lww.bbs.entity.User;
import fun.lww.bbs.service.ReviewService;
import fun.lww.bbs.service.UserService;
import fun.lww.bbs.vo.ReviewVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private MsgDao msgDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Review> getReviewByMsgId(Integer msgId) {
        if (null == msgId) {
            return null;
        }
        return reviewDao.findByMsgId(msgId);
    }

    @Override
    public String save(ReviewVo reviewVo) {
        if (null == reviewVo) {
            return "评论失败";
        }
        if (null == reviewVo.getMsgId() || null == reviewVo.getUserId()) {
            return "评论失败";
        }
        if (StringUtils.isEmpty(reviewVo.getComment())) {
            return "评论内容不能为空";
        }
        Optional<User> optionalUser = userDao.findById(reviewVo.getUserId());
        if (!optionalUser.isPresent()) {
            return "用户不存在";
        }
        User user = optionalUser.get();
        Optional<Msg> optional = msgDao.findById(reviewVo.getMsgId());
        if (!optional.isPresent()) {
            return "帖子已被移除";
        }
        Msg msg = optional.get();

        Review review = new Review();
        review.setUserName(user.getName());
        review.setContent(reviewVo.getComment());
        review.setMsgId(msg.getId());
        review.setCreateTime(new Date());
        review.setModifyTime(new Date());
        reviewDao.save(review);
        return "评论成功";
    }
}
