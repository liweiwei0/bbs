package fun.lww.bbs.service;

import fun.lww.bbs.bean.Message;
import fun.lww.bbs.common.PageBean;
import fun.lww.bbs.common.ResultBean;
import fun.lww.bbs.vo.MessageVo;

import java.util.List;

public interface MessageService {

    List<Message> getLatest(String content, int size);

    List<Message> getFeatured(String content, int size);

    Message getMessageById(Integer id);

    ResultBean<String> save(MessageVo messageVo);

    ResultBean<String> update(MessageVo messageVo);

    ResultBean<String> delete(Integer id);

    PageBean<List<Message>> getMyMessage(MessageVo messageVo);

    PageBean<List<Message>> getMyReviewMessage(MessageVo messageVo);
}
