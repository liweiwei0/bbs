package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Message;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MessageDao extends BaseDao<Message> {

    List<Message> findByContent(@Param("content") String content,
                                @Param("type") String type,
                                @Param("size") int size);

}
