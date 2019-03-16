package fun.lww.bbs.service.impl;

import fun.lww.bbs.dao.ReviewDao;
import fun.lww.bbs.dao.UserDao;
import fun.lww.bbs.entity.Msg;
import fun.lww.bbs.dao.MsgDao;
import fun.lww.bbs.entity.Review;
import fun.lww.bbs.entity.User;
import fun.lww.bbs.service.MsgService;
import fun.lww.bbs.vo.MsgVo;
import fun.lww.bbs.vo.ReviewVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MsgServiceImpl implements MsgService {

    @Autowired
    private MsgDao msgDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Msg> list() {
        return msgDao.findAll();
    }

    @Override
    public List<Msg> getLatest(String content) {
        if (StringUtils.isEmpty(content)) {
            return msgDao.findFirst8ByOrderByCreateTimeDesc();
        }
        return msgDao.findFirst8ByContentLikeOrderByCreateTimeDesc(content);
    }

    @Override
    public List<Msg> getFeatured(String content) {
        if (StringUtils.isEmpty(content)) {
            return msgDao.findFirst8ByOrderByCreateTimeDesc();
        }
        return msgDao.findFirst8ByContentLikeOrderByHeatDesc(content);
    }

    @Override
    public Msg getMsgById(Integer id) {
        if (null == id) {
            return null;
        }
        Optional<Msg> optional = msgDao.findById(id);
        return optional.orElse(new Msg());
    }

    @Override
    public String save(MsgVo msgVo) {
        if (null == msgVo) {
            return "发表失败";
        }
        if (null == msgVo.getUserId()) {
            return "请先登陆";
        }
        if (StringUtils.isEmpty(msgVo.getTitle())) {
            return "标题不能为空";
        }
        if (StringUtils.isEmpty(msgVo.getComment())) {
            return "内容不能为空";
        }
        Optional<User> optional = userDao.findById(msgVo.getUserId());
        if (!optional.isPresent()) {
            return "用户不存在";
        }
        Msg msg = new Msg();
        msg.setUserId(msgVo.getUserId());
        msg.setContent(msgVo.getComment());
        msg.setTitle(msgVo.getTitle());
        msg.setCreateTime(new Date());
        msg.setModifyTime(new Date());
        msg.setHeat(0);
        msgDao.save(msg);
        return "发表成功";
    }
}
