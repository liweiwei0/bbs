package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Message;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageDao extends BaseDao<Message> {

    List<Message> findByContent(@Param("content") String content,
                                @Param("type") String type,
                                @Param("size") int size);

}
