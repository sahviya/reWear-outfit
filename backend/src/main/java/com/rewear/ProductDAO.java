package com.rewear;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    public boolean addProduct(Product product) {
        String sql = "INSERT INTO products (seller_id, name, description, category, size, color, brand, daily_rental_price, purchase_price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, product.getSellerId());
            pstmt.setString(2, product.getName());
            pstmt.setString(3, product.getDescription());
            pstmt.setString(4, product.getCategory());
            pstmt.setString(5, product.getSize());
            pstmt.setString(6, product.getColor());
            pstmt.setString(7, product.getBrand());
            pstmt.setDouble(8, product.getDailyRentalPrice());
            pstmt.setDouble(9, product.getPurchasePrice());
            pstmt.setString(10, product.getStatus());
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            System.err.println("Error adding product: " + e.getMessage());
            return false;
        }
    }
    
    public Product getProductById(int productId) {
        String sql = "SELECT * FROM products WHERE product_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, productId);
            
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                return product;
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting product: " + e.getMessage());
        }
        
        return null;
    }
    
    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();
        String sql = "SELECT * FROM products";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                products.add(product);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting all products: " + e.getMessage());
        }
        
        return products;
    }
    
    public List<Product> getProductsBySeller(int sellerId) {
        List<Product> products = new ArrayList<>();
        String sql = "SELECT * FROM products WHERE seller_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, sellerId);
            
            ResultSet rs = pstmt.executeQuery();
            
            while (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                products.add(product);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting products by seller: " + e.getMessage());
        }
        
        return products;
    }
    
    public List<Product> searchProducts(String keyword) {
        List<Product> products = new ArrayList<>();
        String sql = "SELECT * FROM products WHERE name LIKE ? OR category LIKE ? OR brand LIKE ? OR description LIKE ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            String searchPattern = "%" + keyword + "%";
            pstmt.setString(1, searchPattern);
            pstmt.setString(2, searchPattern);
            pstmt.setString(3, searchPattern);
            pstmt.setString(4, searchPattern);
            
            ResultSet rs = pstmt.executeQuery();
            
            while (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                products.add(product);
            }
            
        } catch (SQLException e) {
            System.err.println("Error searching products: " + e.getMessage());
        }
        
        return products;
    }
    
    public boolean updateProductStatus(int productId, String status) {
        String sql = "UPDATE products SET status = ? WHERE product_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, status);
            pstmt.setInt(2, productId);
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            System.err.println("Error updating product status: " + e.getMessage());
            return false;
        }
    }
    
    public List<Product> getPendingProducts() {
        List<Product> products = new ArrayList<>();
        String sql = "SELECT * FROM products WHERE status = 'PENDING'";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                products.add(product);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting pending products: " + e.getMessage());
        }
        
        return products;
    }
    
    public List<Product> getAvailableProducts() {
        List<Product> products = new ArrayList<>();
        String sql = "SELECT * FROM products WHERE status = 'AVAILABLE' OR status = 'APPROVED'";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                Product product = new Product();
                product.setProductId(rs.getInt("product_id"));
                product.setSellerId(rs.getInt("seller_id"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setCategory(rs.getString("category"));
                product.setSize(rs.getString("size"));
                product.setColor(rs.getString("color"));
                product.setBrand(rs.getString("brand"));
                product.setDailyRentalPrice(rs.getDouble("daily_rental_price"));
                product.setPurchasePrice(rs.getDouble("purchase_price"));
                product.setStatus(rs.getString("status"));
                product.setImageUrl(rs.getString("image_url"));
                products.add(product);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting available products: " + e.getMessage());
        }
        
        return products;
    }
}
