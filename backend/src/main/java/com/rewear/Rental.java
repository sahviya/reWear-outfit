package com.rewear;
public class Rental {
    private int rentalId;
    private int orderId;
    private int productId;
    private int buyerId;
    private String startDate;
    private String endDate;
    private double rentalFee;
    private String status;
    
    public Rental() {}
    
    public Rental(int orderId, int productId, int buyerId, String startDate, String endDate, double rentalFee) {
        this.orderId = orderId;
        this.productId = productId;
        this.buyerId = buyerId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.rentalFee = rentalFee;
        this.status = "ACTIVE";
    }
    
    // Getters and Setters
    public int getRentalId() { return rentalId; }
    public void setRentalId(int rentalId) { this.rentalId = rentalId; }
    
    public int getOrderId() { return orderId; }
    public void setOrderId(int orderId) { this.orderId = orderId; }
    
    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }
    
    public int getBuyerId() { return buyerId; }
    public void setBuyerId(int buyerId) { this.buyerId = buyerId; }
    
    public String getStartDate() { return startDate; }
    public void setStartDate(String startDate) { this.startDate = startDate; }
    
    public String getEndDate() { return endDate; }
    public void setEndDate(String endDate) { this.endDate = endDate; }
    
    public double getRentalFee() { return rentalFee; }
    public void setRentalFee(double rentalFee) { this.rentalFee = rentalFee; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    @Override
    public String toString() {
        return "Rental{" +
                "rentalId=" + rentalId +
                ", productId=" + productId +
                ", buyerId=" + buyerId +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", rentalFee=" + rentalFee +
                ", status='" + status + '\'' +
                '}';
    }
}
