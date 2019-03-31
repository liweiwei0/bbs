package fun.lww.bbs.dao;

import fun.lww.bbs.bean.Tag;
import fun.lww.bbs.vo.TagVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagDao extends BaseDao<Tag>{

    Integer findCountByCondition(TagVo tagVo);

    List<Tag> findByCondition(@Param("tagVo") TagVo tagVo, @Param("startRow") int startRow, @Param("pageSize") int pageSize);

    List<Tag> findByName(@Param("name") String name);

}
