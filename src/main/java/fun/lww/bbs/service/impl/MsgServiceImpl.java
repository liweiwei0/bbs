package fun.lww.bbs.service.impl;

import fun.lww.bbs.entity.Msg;
import fun.lww.bbs.dao.MsgDao;
import fun.lww.bbs.service.MsgService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MsgServiceImpl implements MsgService {

    @Autowired
    private MsgDao msgDao;

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
}
