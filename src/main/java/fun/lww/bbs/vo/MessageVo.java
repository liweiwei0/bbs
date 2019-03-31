package fun.lww.bbs.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import fun.lww.bbs.bean.Message;

import java.util.Date;

public class MessageVo extends PageVo{

    private Integer id;

    private Integer userId;

    private String userName;

    private String title;

    private String tag;

    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    public MessageVo() {
    }

    public MessageVo(Message message) {
        this.id = message.getId();
        this.title = message.getTitle();
        this.tag = message.getTag();
        this.content = message.getContent();
        this.userId = message.getUserId();
        this.createTime = message.getCreateTime();
        this.modifyTime = message.getModifyTime();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
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
