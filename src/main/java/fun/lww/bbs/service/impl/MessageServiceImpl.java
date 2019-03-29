package fun.lww.bbs.service.impl;

import com.google.common.collect.Lists;
import fun.lww.bbs.bean.Message;
import fun.lww.bbs.bean.User;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.dao.MessageDao;
import fun.lww.bbs.dao.ReviewDao;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.service.MessageService;
import fun.lww.bbs.vo.MessageVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
@Slf4j
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Message> getLatest(String content, int size) {
        List<Message> list = messageDao.findByContent(content, "latest", size);
        if (!CollectionUtils.isEmpty(list)) {
            list.forEach(it -> {
                if (StringUtils.isNotBlank(it.getTag())) {
                    String[] tags = it.getTag().split(" & ");
                    if (tags.length > 2) {
                        it.setTag(tags[0] + " & " + tags[1]);
                    }
                }
            });
            return list;
        }
        return Lists.newArrayList();
    }

    @Override
    public List<Message> getFeatured(String content, int size) {
        List<Message> list = messageDao.findByContent(content, "featured", size);
        if (!CollectionUtils.isEmpty(list)) {
            list.forEach(it -> {
                if (StringUtils.isNotBlank(it.getTag())) {
                    String[] tags = it.getTag().split(" & ");
                    if (tags.length > 2) {
                        it.setTag(tags[0] + " & " + tags[1]);
                    }
                }
            });
            return list;
        }
        return Lists.newArrayList();
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

        Message message = new Message();
        message.setUserId(messageVo.getUserId());
        message.setContent(messageVo.getContent());
        message.setTitle(messageVo.getTitle());
        if (StringUtils.isNotBlank(messageVo.getTag()) && messageVo.getTag().endsWith(" & ")) {
            message.setTag(messageVo.getTag().substring(0, messageVo.getTag().length() - 3));
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
        if (StringUtils.isNotBlank(messageVo.getTag()) && messageVo.getTag().endsWith(" & ")) {
            message.setTag(messageVo.getTag().substring(0, messageVo.getTag().length() - 3));
        }
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

    @Override
    public PageBean<List<Message>> getMyMessage(MessageVo messageVo) {
        PageBean<List<Message>> pageBean = new PageBean<>();

        if (null == messageVo || null == messageVo.getUserId()) {
            return pageBean;
        }
        pageBean.setPageNum(messageVo.getPageNum());
        pageBean.setPageSize(messageVo.getPageSize());

        Integer count = messageDao.findCountByContentAndUserId(messageVo.getContent(), messageVo.getUserId());
        if (null == count || count == 0) {
            return pageBean;
        }
        pageBean.setTotalCount(count);

//        PageHelper.startPage(pageBean.getStartRow(), pageBean.getPageSize());
        List<Message> list = messageDao.findByContentAndUserId(messageVo.getContent(), messageVo.getUserId());
        pageBean.setData(list);
        return pageBean;
    }

    @Override
    public PageBean<List<Message>> getMyReviewMessage(MessageVo messageVo) {
        PageBean<List<Message>> pageBean = new PageBean<>();

        if (null == messageVo || null == messageVo.getUserId()) {
            return pageBean;
        }
        pageBean.setPageNum(messageVo.getPageNum());
        pageBean.setPageSize(messageVo.getPageSize());

        List<Integer> messageIds = reviewDao.findIdByUserId(messageVo.getUserId());
        if (CollectionUtils.isEmpty(messageIds)) {
            return pageBean;
        }

        Integer count = messageDao.findCountByIdAndContent(messageVo.getContent(), messageIds);
        if (null == count || count == 0) {
            return pageBean;
        }
        pageBean.setTotalCount(count);

//        PageHelper.startPage(pageBean.getStartRow(), pageBean.getPageSize());
        List<Message> list = messageDao.findByIdAndContent(messageVo.getContent(), messageIds);
        pageBean.setData(list);
        return pageBean;
    }
}
