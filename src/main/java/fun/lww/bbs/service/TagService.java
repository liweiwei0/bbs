package fun.lww.bbs.service;

import fun.lww.bbs.bean.Tag;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.TagVo;

import java.util.List;

public interface TagService {

    List<Tag> list();

    PageBean<List<Tag>> findByCondition(TagVo tagVo);

    ResultBean<String> delete(Integer id);

    ResultBean<String> save(String name);

    ResultBean<String> update(TagVo tagVo);

    Tag getById(Integer id);
}
