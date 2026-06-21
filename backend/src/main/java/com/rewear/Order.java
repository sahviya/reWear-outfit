package com.rewear;
public class Order {
    private int orderId;
    private int buyerId;
    private int productId;
    private String orderType;
    private double totalAmount;
    private String orderDate;
    private String status;
    
    public Order() {}
    
    public Order(int buyerId, int productId, String orderType, double totalAmount) {
        this.buyerId = buyerId;
        this.productId = productId;
        this.orderType = orderType;
        this.totalAmount = totalAmount;
        this.status = "PENDING";
    }
    
    // Getters and Setters
    public int getOrderId() { return orderId; }
    public void setOrderId(int orderId) { this.orderId = orderId; }
    
    public int getBuyerId() { return buyerId; }
    public void setBuyerId(int buyerId) { this.buyerId = buyerId; }
    
    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }
    
    public String getOrderType() { return orderType; }
    public void setOrderType(String orderType) { this.orderType = orderType; }
    
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }
    
    public String getOrderDate() { return orderDate; }
    public void setOrderDate(String orderDate) { this.orderDate = orderDate; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", buyerId=" + buyerId +
                ", productId=" + productId +
                ", orderType='" + orderType + '\'' +
                ", totalAmount=" + totalAmount +
                ", status='" + status + '\'' +
                '}';
    }
}
