package fun.lww.bbs.common;

/**
 * create by liweiwei on 2019/03/23
 */
public class ResultBean<T> {

    /**
     * 默认为0 成功1 失败2
     */
    private int code = 0;

    private String msg;

    private T data;

    public ResultBean() {
    }

    public ResultBean(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public ResultBean(T data) {
        this.code = 1;
        this.data = data;
    }

    public ResultBean(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
