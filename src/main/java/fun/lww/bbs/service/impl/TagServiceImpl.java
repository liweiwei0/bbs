package fun.lww.bbs.service.impl;

import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.TagDao;
import fun.lww.bbs.bean.Tag;
import fun.lww.bbs.service.TagService;
import fun.lww.bbs.vo.TagVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import sun.jvm.hotspot.debugger.Page;

import java.util.List;

@Service
@Slf4j
public class TagServiceImpl implements TagService {

    @Autowired
    private TagDao tagDao;

    @Override
    public List<Tag> list() {
        return tagDao.findAll();
    }

    @Override
    public PageBean<List<Tag>> findByCondition(TagVo tagVo) {
        PageBean<List<Tag>> pageBean = new PageBean<>(tagVo.getPageNum(), tagVo.getPageSize());

        Integer count = tagDao.findCountByCondition(tagVo);
        if (null == count || count <= 0) {
            pageBean.setDataTotal(0);
            return pageBean;
        }
        pageBean.setDataTotal(count);

        List<Tag> list = tagDao.findByCondition(tagVo, pageBean.getStartRow(), pageBean.getPageSize());
        pageBean.setData(list);
        return pageBean;
    }

    @Override
    public ResultBean<String> delete(Integer id) {
        if (null == id) {
            return new ResultBean<>(2, "删除失败");
        }
        tagDao.delete(id);
        return new ResultBean<>(1, "删除成功");
    }

    @Override
    public ResultBean<String> save(String name) {
        if (StringUtils.isBlank(name)) {
            return new ResultBean<>(2, "添加失败");
        }
        List<Tag> list = tagDao.findByName(name);
        if (!CollectionUtils.isEmpty(list)) {
            return new ResultBean<>(2, "添加失败，标签已存在");
        }
        Tag tag = new Tag();
        tag.setName(name);
        tagDao.insert(tag);
        return new ResultBean<>(1, "添加成功");
    }

    @Override
    public ResultBean<String> update(TagVo tagVo) {
        if (null == tagVo || StringUtils.isBlank(tagVo.getName()) || null == tagVo.getId()) {
            return new ResultBean<>(2, "修改失败");
        }
        List<Tag> list = tagDao.findByName(tagVo.getName());
        if (!CollectionUtils.isEmpty(list)) {
            long count = list.stream().filter(it -> !it.getId().equals(tagVo.getId())).count();
            if (count > 0) {
                return new ResultBean<>(2, "修改失败，标签已存在");
            }
        }

        Tag tag = new Tag();
        tag.setId(tagVo.getId());
        tag.setName(tagVo.getName());
        tagDao.update(tag);
        return new ResultBean<>(1, "修改成功");
    }

    @Override
    public Tag getById(Integer id) {
        if (null == id) {
            return null;
        }
        return tagDao.findById(id);
    }
}
