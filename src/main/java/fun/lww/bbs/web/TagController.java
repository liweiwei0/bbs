package fun.lww.bbs.web;

import fun.lww.bbs.entity.Tag;
import fun.lww.bbs.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    public List<Tag> list() {
        return tagService.list();
    }
}
