package fun.lww.bbs.common;

public class PageBean<T> {

    private int pageNum = 1;

    private int pageSize = 10;

    private int totalCount;

    private T data;

    public PageBean() {
    }

    public PageBean(int pageNum, int pageSize) {
        this.pageSize = pageSize;
        this.pageNum = pageNum;
    }


    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public int getStartRow() {
        return (pageNum - 1) * pageSize;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }
}
