package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.vo.MessageVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageDao extends BaseDao<Message> {

    List<Message> findByContent(@Param("content") String content,
                                @Param("tag") String tag,
                                @Param("messageIds") List<Integer> messageIds,
                                @Param("type") String type,
                                @Param("pageSize") int pageSize);

    void addHeat(@Param("id") Integer id);

    Integer findCountByContentAndUserId(@Param("content") String content, @Param("userId") Integer userId);

    List<Message> findByContentAndUserId(@Param("content") String content,
                                         @Param("userId") Integer userId,
                                         @Param("startRow") int startRow,
                                         @Param("pageSize") int pageSize);

    Integer findCountByIdAndContent(@Param("content") String content,
                                    @Param("messageIds") List<Integer> messageIds);

    List<Message> findByIdAndContent(@Param("content") String content,
                                     @Param("messageIds") List<Integer> messageIds,
                                     @Param("startRow") int startRow,
                                     @Param("pageSize") int pageSize);

    Integer findCountByCondition(MessageVo messageVo);

    List<Message> findByCondition(@Param("messageVo") MessageVo messageVo, @Param("startRow") int startRow, @Param("pageSize") int pageSize);

}
