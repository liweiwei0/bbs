package fun.lww.bbs.web;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.service.MessageService;
import fun.lww.bbs.vo.MessageVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 消息管理
 * create by liweiwei on 2019/03/16
 */
@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    /**
     * 最新信息
     */
    @RequestMapping(value = "/getLatest", method = RequestMethod.GET)
    public ResultBean<List<Message>> getLatest(@RequestParam(value = "content", required = false) String content,
                                @RequestParam(value = "size", required = false, defaultValue = "10") int size) {
        return new ResultBean<>(messageService.getLatest(content, size));
    }

    /**
     * 精选信息 最热信息
     */
    @RequestMapping(value = "/getFeatured", method = RequestMethod.GET)
    public ResultBean<List<Message>> getFeatured(@RequestParam(value = "content", required = false) String content,
                                     @RequestParam(value = "size", required = false, defaultValue = "10") int size) {
        return new ResultBean<>(messageService.getFeatured(content, size));
    }

    /**
     * 根据ID查询信息
     */
    @RequestMapping(value = "/getMessage", method = RequestMethod.GET)
    public ResultBean<Message> getMessageById(Integer id) {
        return new ResultBean<>(messageService.getMessageById(id));
    }

    /**
     * 发表
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResultBean<String> save(MessageVo messageVo) {
        return messageService.save(messageVo);
    }

    /**
     * 修改帖子
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultBean<String> update(MessageVo messageVo) {
        return messageService.update(messageVo);
    }

    /**
     * 删除帖子
     */
    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public ResultBean<String> delete(Integer id) {
        return messageService.delete(id);
    }

}
