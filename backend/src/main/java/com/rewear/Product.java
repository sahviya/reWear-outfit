package com.rewear;
public class Product {
    private int productId;
    private int sellerId;
    private String name;
    private String description;
    private String category;
    private String size;
    private String color;
    private String brand;
    private double dailyRentalPrice;
    private double purchasePrice;
    private String status;
    private String imageUrl;
    
    public Product() {}
    
    public Product(int sellerId, String name, String description, String category, 
                   String size, String color, String brand, double dailyRentalPrice, double purchasePrice) {
        this.sellerId = sellerId;
        this.name = name;
        this.description = description;
        this.category = category;
        this.size = size;
        this.color = color;
        this.brand = brand;
        this.dailyRentalPrice = dailyRentalPrice;
        this.purchasePrice = purchasePrice;
        this.status = "PENDING";
    }
    
    // Getters and Setters
    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }
    
    public int getSellerId() { return sellerId; }
    public void setSellerId(int sellerId) { this.sellerId = sellerId; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    
    public double getDailyRentalPrice() { return dailyRentalPrice; }
    public void setDailyRentalPrice(double dailyRentalPrice) { this.dailyRentalPrice = dailyRentalPrice; }
    
    public double getPurchasePrice() { return purchasePrice; }
    public void setPurchasePrice(double purchasePrice) { this.purchasePrice = purchasePrice; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    
    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", size='" + size + '\'' +
                ", color='" + color + '\'' +
                ", brand='" + brand + '\'' +
                ", dailyRentalPrice=" + dailyRentalPrice +
                ", purchasePrice=" + purchasePrice +
                ", status='" + status + '\'' +
                '}';
    }
}
