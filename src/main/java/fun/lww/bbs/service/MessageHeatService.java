package fun.lww.bbs.service;

import fun.lww.bbs.common.ResultBean;

public interface MessageHeatService {

    ResultBean<String> save(Integer messageId, Integer userId);

}
