package fun.lww.bbs.dao;

import fun.lww.bbs.bean.MessageHeat;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageHeatDao extends BaseDao<MessageHeat> {

    Long getCount(@Param("messageId") Integer messageId, @Param("userId") Integer userId);
}
