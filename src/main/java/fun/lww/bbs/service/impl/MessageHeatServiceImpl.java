package fun.lww.bbs.service.impl;

import fun.lww.bbs.bean.MessageHeat;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.MessageDao;
import fun.lww.bbs.dao.MessageHeatDao;
import fun.lww.bbs.service.MessageHeatService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MessageHeatServiceImpl implements MessageHeatService {

    @Autowired
    private MessageHeatDao messageHeatDao;

    @Autowired
    private MessageDao messageDao;

    @Override
    public ResultBean<String> save(Integer messageId, Integer userId) {
        if (null == messageId || null == userId) {
            return new ResultBean<>(2, "点赞失败，参数为空");
        }
        Long existCount = messageHeatDao.getCount(messageId, userId);
        if (null != existCount && existCount > 0) {
            return new ResultBean<>(2, "您已点过赞了");
        }

        MessageHeat messageHeat = new MessageHeat();
        messageHeat.setMessageId(messageId);
        messageHeat.setUserId(userId);
        messageHeatDao.insert(messageHeat);
        messageDao.addHeat(messageId);
        return new ResultBean<>(1, "点赞成功");
    }

}
