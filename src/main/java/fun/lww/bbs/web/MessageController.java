package fun.lww.bbs.web;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.common.PageBean;
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
     * 管理员查询所有
     */
    @RequestMapping(value = "/findByCondition", method = RequestMethod.POST)
    public ResultBean<PageBean<List<MessageVo>>> findByCondition(MessageVo messageVo) {
        return new ResultBean<>(messageService.findByCondition(messageVo));
    }
    /**
     * 最新信息
     */
    @RequestMapping(value = "/getLatest", method = RequestMethod.GET)
    public ResultBean<List<Message>> getLatest(@RequestParam(value = "content", required = false) String content,
                                               @RequestParam(value = "tag", required = false) String tag,
                                               @RequestParam(value = "size", required = false, defaultValue = "10")
                                                           int size) {
        return new ResultBean<>(messageService.getLatest(content, tag, size));
    }

    /**
     * 精选信息 最热信息
     */
    @RequestMapping(value = "/getFeatured", method = RequestMethod.GET)
    public ResultBean<List<Message>> getFeatured(@RequestParam(value = "content", required = false) String content,
                                                 @RequestParam(value = "tag", required = false) String tag,
                                                 @RequestParam(value = "size", required = false, defaultValue = "10")
                                                             int size) {
        return new ResultBean<>(messageService.getFeatured(content, tag, size));
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

    /**
     * 获取我的帖子
     */
    @RequestMapping(value = "/getMyMessage", method = RequestMethod.POST)
    public ResultBean<PageBean<List<Message>>> getMyMessage(MessageVo messageVo) {
        return new ResultBean<>(messageService.getMyMessage(messageVo));
    }

    /**
     * 获取我评论的帖子
     */
    @RequestMapping(value = "/getMyReviewMessage", method = RequestMethod.POST)
    public ResultBean<PageBean<List<Message>>> getMyReviewMessage(MessageVo messageVo) {
        return new ResultBean<>(messageService.getMyReviewMessage(messageVo));
    }

}
