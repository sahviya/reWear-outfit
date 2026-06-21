package com.rewear;
public class ReturnRequest {
    private int returnId;
    private int rentalId;
    private int productId;
    private int buyerId;
    private String returnDate;
    private String conditionStatus;
    private double damageFee;
    private String status;
    
    public ReturnRequest() {}
    
    public ReturnRequest(int rentalId, int productId, int buyerId, String conditionStatus) {
        this.rentalId = rentalId;
        this.productId = productId;
        this.buyerId = buyerId;
        this.conditionStatus = conditionStatus;
        this.damageFee = 0.0;
        this.status = "REQUESTED";
    }
    
    // Getters and Setters
    public int getReturnId() { return returnId; }
    public void setReturnId(int returnId) { this.returnId = returnId; }
    
    public int getRentalId() { return rentalId; }
    public void setRentalId(int rentalId) { this.rentalId = rentalId; }
    
    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }
    
    public int getBuyerId() { return buyerId; }
    public void setBuyerId(int buyerId) { this.buyerId = buyerId; }
    
    public String getReturnDate() { return returnDate; }
    public void setReturnDate(String returnDate) { this.returnDate = returnDate; }
    
    public String getConditionStatus() { return conditionStatus; }
    public void setConditionStatus(String conditionStatus) { this.conditionStatus = conditionStatus; }
    
    public double getDamageFee() { return damageFee; }
    public void setDamageFee(double damageFee) { this.damageFee = damageFee; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    @Override
    public String toString() {
        return "ReturnRequest{" +
                "returnId=" + returnId +
                ", rentalId=" + rentalId +
                ", productId=" + productId +
                ", conditionStatus='" + conditionStatus + '\'' +
                ", damageFee=" + damageFee +
                ", status='" + status + '\'' +
                '}';
    }
}
