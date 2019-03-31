package fun.lww.bbs.common;

public class PageBean<T> {

    // 第几页
    private int pageNum = 1;

    // 每页多少条
    private int pageSize = 10;

    // 总页数
    private int pageTotal;

    // 总条数
    private int dataTotal;

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

    public int getPageTotal() {
        return pageTotal;
    }

    public void setPageTotal(int pageTotal) {
        this.pageTotal = pageTotal;
    }

    public int getDataTotal() {
        return dataTotal;
    }

    public void setDataTotal(int dataTotal) {
        this.pageTotal =  dataTotal % pageSize > 0 ?  dataTotal / pageSize + 1 : dataTotal / pageSize;
        this.dataTotal = dataTotal;
    }
}
