package fun.lww.bbs.dao;

import java.util.List;

public interface BaseDao<T> {

    int insert(T t);

    int update(T t);

    int delete(Integer id);

    List<T> findAll();

    T findById(Integer id);
}
