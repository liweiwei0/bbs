package fun.lww.bbs.dao;

import fun.lww.bbs.entity.Msg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MsgDao extends JpaRepository<Msg, Integer> {

    List<Msg> findFirst8ByContentLikeOrderByCreateTimeDesc(String content);

    List<Msg> findFirst8ByContentLikeOrderByHeatDesc(String content);

    List<Msg> findFirst8ByOrderByCreateTimeDesc();

    List<Msg> findFirst8ByOrderByHeatDesc();
}
