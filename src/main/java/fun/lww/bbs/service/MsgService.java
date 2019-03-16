package fun.lww.bbs.service;

import fun.lww.bbs.entity.Msg;

import java.util.List;

public interface MsgService {

    List<Msg> getLatest(String content);

    List<Msg> getFeatured(String content);

    List<Msg> list();

    Msg getMsgById(Integer id);
}
