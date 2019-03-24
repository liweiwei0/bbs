package fun.lww.bbs.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import fun.lww.bbs.bean.Review;

import java.util.Date;

public class ReviewVo {

    private Integer id;

    private Integer messageId;

    private Integer userId;

    private String userName;

    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    public ReviewVo() {
    }

    public ReviewVo(Review review) {
        this.id = review.getId();
        this.content = review.getContent();
        this.userId = review.getUserId();
        this.createTime = review.getCreateTime();
        this.modifyTime = review.getModifyTime();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }
}
