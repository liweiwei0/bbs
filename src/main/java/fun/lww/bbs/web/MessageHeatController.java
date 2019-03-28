package fun.lww.bbs.web;

import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.service.MessageHeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 消息点赞管理
 * create by liweiwei on 2019/03/27
 */
@RestController
@RequestMapping("/messageHeat")
public class MessageHeatController {

    @Autowired
    private MessageHeatService messageHeatService;

    /**
     * 添加
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResultBean<String> save(Integer messageId, Integer userId) {
        return messageHeatService.save(messageId, userId);
    }

}
