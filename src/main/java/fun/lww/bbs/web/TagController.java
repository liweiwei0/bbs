package fun.lww.bbs.web;

import fun.lww.bbs.bean.Tag;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.service.TagService;
import fun.lww.bbs.vo.TagVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 标签管理
 * create by liweiwei on 2019/03/16
 */
@RestController
@RequestMapping("/tag")
public class TagController {

    @Autowired
    private TagService tagService;

    /**
     * 标签列表
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResultBean<List<Tag>> list() {
        return new ResultBean<>(tagService.list());
    }

    /**
     * 分页查询
     */
    @RequestMapping(value = "/findByCondition", method = RequestMethod.POST)
    public ResultBean<PageBean<List<Tag>>> findByCondition(TagVo tagVo) {
        return new ResultBean<>(tagService.findByCondition(tagVo));
    }

    /**
     * 添加标签
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResultBean<String> save(@RequestParam("name") String name) {
        return tagService.save(name);
    }

    /**
     * 修改标签
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultBean<String> update(TagVo tagVo) {
        return tagService.update(tagVo);
    }

    /**
     * 删除标签
     */
    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public ResultBean<String> delete(Integer id) {
        return tagService.delete(id);
    }

    /**
     * 按ID查询
     */
    @RequestMapping(value = "/getById", method = RequestMethod.GET)
    public ResultBean<Tag> getById(@RequestParam("id") Integer id) {
        return new ResultBean<>(tagService.getById(id));
    }
}
