package fun.lww.bbs.service.impl;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.MessageDao;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.service.MessageService;
import fun.lww.bbs.vo.MessageVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Message> getLatest(String content, int size) {
        return messageDao.findByContent(content, "latest", size);
    }

    @Override
    public List<Message> getFeatured(String content, int size) {
        return messageDao.findByContent(content, "featured", size);
    }

    @Override
    public Message getMessageById(Integer id) {
        if (null == id) {
            return null;
        }
        return messageDao.findById(id);
    }

    @Override
    public ResultBean<String> save(MessageVo messageVo) {
        if (null == messageVo) {
            return new ResultBean<>(2, "发表失败");
        }
        if (null == messageVo.getUserId()) {
            return new ResultBean<>(2, "发表失败，请先登陆");
        }
        if (StringUtils.isEmpty(messageVo.getTitle())) {
            return new ResultBean<>(2, "发表失败，标题不能为空");
        }
        if (StringUtils.isEmpty(messageVo.getContent())) {
            return new ResultBean<>(2, "发表失败，内容不能为空");
        }
        User user = userDao.findById(messageVo.getUserId());
        if (null == user) {
            return new ResultBean<>(2, "发表失败，用户不存在");
        }

        StringBuilder tag = new StringBuilder();
        messageVo.getTags().forEach(it -> tag.append(it).append(" & "));
        Message message = new Message();
        message.setUserId(messageVo.getUserId());
        message.setContent(messageVo.getContent());
        message.setTitle(messageVo.getTitle());
        if (tag.length() > 0) {
            message.setTag(tag.toString().substring(0, tag.length() - 3));
        }
        message.setHeat(0);
        messageDao.insert(message);
        return new ResultBean<>(1, "发表成功");
    }

    @Override
    public ResultBean<String> update(MessageVo messageVo) {
        if (null == messageVo) {
            return new ResultBean<>(2, "更新失败");
        }
        if (null == messageVo.getUserId()) {
            return new ResultBean<>(2, "更新失败，请先登陆");
        }
        if (null == messageVo.getId()) {
            return new ResultBean<>(2, "更新失败，帖子不存在");
        }
        if (StringUtils.isEmpty(messageVo.getTitle())) {
            return new ResultBean<>(2, "更新失败，标题不能为空");
        }
        if (StringUtils.isEmpty(messageVo.getContent())) {
            return new ResultBean<>(2, "更新失败，内容不能为空");
        }
        User user = userDao.findById(messageVo.getUserId());
        if (null == user) {
            return new ResultBean<>(2, "更新失败，用户不存在");
        }
        Message message = messageDao.findById(messageVo.getId());
        if (null == message) {
            return new ResultBean<>(2, "更新失败，帖子不存在");
        }

        message.setTitle(messageVo.getTitle());
        message.setContent(messageVo.getContent());
        // TODO
//        message.setTag();
        messageDao.update(message);
        return new ResultBean<>(1, "更新成功");
    }

    @Override
    public ResultBean<String> delete(Integer id) {
        if (null == id) {
            return new ResultBean<>(2, "删除失败");
        }
        messageDao.delete(id);
        return new ResultBean<>(1, "删除成功");
    }
}