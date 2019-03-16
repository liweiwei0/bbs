package fun.lww.bbs.dao;

import fun.lww.bbs.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagDao extends JpaRepository<Tag, Integer> {

}
