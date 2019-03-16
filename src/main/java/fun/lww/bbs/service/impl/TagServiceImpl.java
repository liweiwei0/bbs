package fun.lww.bbs.service.impl;

import fun.lww.bbs.dao.TagDao;
import fun.lww.bbs.entity.Tag;
import fun.lww.bbs.service.TagService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TagServiceImpl implements TagService {

    @Autowired
    private TagDao tagDao;

    @Override
    public List<Tag> list() {
        return tagDao.findAll();
    }

}
