package fun.lww.bbs.web;

import fun.lww.bbs.entity.Msg;
import fun.lww.bbs.service.MsgService;
import fun.lww.bbs.vo.MsgVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 消息管理
 * create by liweiwei on 2019/03/16
 */
@RestController
@RequestMapping("/msg")
public class MsgController {

    @Autowired
    private MsgService msgService;

    /**
     * 最新信息
     */
    @RequestMapping(value = "/getLatest", method = RequestMethod.GET)
    public List<Msg> getLatest(String content) {
        return msgService.getLatest(content);
    }

    /**
     * 精选信息
     */
    @RequestMapping(value = "/getFeatured", method = RequestMethod.GET)
    public List<Msg> getFeatured(String content) {
        return msgService.getFeatured(content);
    }

    /**
     * 根据ID查询信息
     */
    @RequestMapping(value = "/getMsg", method = RequestMethod.GET)
    public Msg getMsgById(Integer id) {
        return msgService.getMsgById(id);
    }

    /**
     * 发表
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(MsgVo msgVo) {
        return msgService.save(msgVo);
    }

}
