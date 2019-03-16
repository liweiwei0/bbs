package fun.lww.bbs.service.impl;

import fun.lww.bbs.dao.ReviewDao;
import fun.lww.bbs.entity.Review;
import fun.lww.bbs.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDao reviewDao;

    @Override
    public List<Review> getReviewByMsgId(Integer msgId) {
        if (null == msgId) {
            return null;
        }
        return reviewDao.findByMsgId(msgId);
    }

}
