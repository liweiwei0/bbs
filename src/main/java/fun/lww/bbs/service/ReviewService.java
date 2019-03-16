package fun.lww.bbs.service;

import fun.lww.bbs.entity.Review;

import java.util.List;

public interface ReviewService {

    List<Review> getReviewByMsgId(Integer msgId);
}
