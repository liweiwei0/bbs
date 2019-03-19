package fun.lww.bbs.dao;

import fun.lww.bbs.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewDao extends JpaRepository<Review, Integer> {

    List<Review> findByMsgIdOrderByCreateTimeAsc(Integer msgId);

}
