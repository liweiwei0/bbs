package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.vo.MessageVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageDao extends BaseDao<Message> {

    List<Message> findByContent(@Param("content") String content,
                                @Param("type") String type,
                                @Param("size") int size);

    void addHeat(@Param("id") Integer id);

    Integer findCountByContentAndUserId(@Param("content") String content, @Param("userId") Integer userId);

    List<Message> findByContentAndUserId(@Param("content") String content, @Param("userId") Integer userId);

    Integer findCountByIdAndContent(@Param("content") String content,
                                             @Param("messageIds") List<Integer> messageIds);

    List<Message> findByIdAndContent(@Param("content") String content,
                                              @Param("messageIds") List<Integer> messageIds);
}
