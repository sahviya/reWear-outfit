package com.rewear;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ReturnDAO {
    public boolean createReturnRequest(ReturnRequest returnRequest) {
        String sql = "INSERT INTO returns (rental_id, product_id, buyer_id, condition_status, damage_fee, status) VALUES (?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            
            pstmt.setInt(1, returnRequest.getRentalId());
            pstmt.setInt(2, returnRequest.getProductId());
            pstmt.setInt(3, returnRequest.getBuyerId());
            pstmt.setString(4, returnRequest.getConditionStatus());
            pstmt.setDouble(5, returnRequest.getDamageFee());
            pstmt.setString(6, returnRequest.getStatus());
            
            int rowsAffected = pstmt.executeUpdate();
            
            if (rowsAffected > 0) {
                ResultSet rs = pstmt.getGeneratedKeys();
                if (rs.next()) {
                    returnRequest.setReturnId(rs.getInt(1));
                }
                return true;
            }
            
        } catch (SQLException e) {
            System.err.println("Error creating return request: " + e.getMessage());
        }
        
        return false;
    }
    
    public ReturnRequest getReturnById(int returnId) {
        String sql = "SELECT * FROM returns WHERE return_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, returnId);
            
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                ReturnRequest returnRequest = new ReturnRequest();
                returnRequest.setReturnId(rs.getInt("return_id"));
                returnRequest.setRentalId(rs.getInt("rental_id"));
                returnRequest.setProductId(rs.getInt("product_id"));
                returnRequest.setBuyerId(rs.getInt("buyer_id"));
                returnRequest.setReturnDate(rs.getString("return_date"));
                returnRequest.setConditionStatus(rs.getString("condition_status"));
                returnRequest.setDamageFee(rs.getDouble("damage_fee"));
                returnRequest.setStatus(rs.getString("status"));
                return returnRequest;
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting return request: " + e.getMessage());
        }
        
        return null;
    }
    
    public List<ReturnRequest> getReturnsByBuyer(int buyerId) {
        List<ReturnRequest> returns = new ArrayList<>();
        String sql = "SELECT * FROM returns WHERE buyer_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, buyerId);
            
            ResultSet rs = pstmt.executeQuery();
            
            while (rs.next()) {
                ReturnRequest returnRequest = new ReturnRequest();
                returnRequest.setReturnId(rs.getInt("return_id"));
                returnRequest.setRentalId(rs.getInt("rental_id"));
                returnRequest.setProductId(rs.getInt("product_id"));
                returnRequest.setBuyerId(rs.getInt("buyer_id"));
                returnRequest.setReturnDate(rs.getString("return_date"));
                returnRequest.setConditionStatus(rs.getString("condition_status"));
                returnRequest.setDamageFee(rs.getDouble("damage_fee"));
                returnRequest.setStatus(rs.getString("status"));
                returns.add(returnRequest);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting returns by buyer: " + e.getMessage());
        }
        
        return returns;
    }
    
    public boolean updateReturnStatus(int returnId, String status) {
        String sql = "UPDATE returns SET status = ? WHERE return_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, status);
            pstmt.setInt(2, returnId);
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            System.err.println("Error updating return status: " + e.getMessage());
            return false;
        }
    }
    
    public List<ReturnRequest> getPendingReturns() {
        List<ReturnRequest> returns = new ArrayList<>();
        String sql = "SELECT * FROM returns WHERE status = 'REQUESTED'";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                ReturnRequest returnRequest = new ReturnRequest();
                returnRequest.setReturnId(rs.getInt("return_id"));
                returnRequest.setRentalId(rs.getInt("rental_id"));
                returnRequest.setProductId(rs.getInt("product_id"));
                returnRequest.setBuyerId(rs.getInt("buyer_id"));
                returnRequest.setReturnDate(rs.getString("return_date"));
                returnRequest.setConditionStatus(rs.getString("condition_status"));
                returnRequest.setDamageFee(rs.getDouble("damage_fee"));
                returnRequest.setStatus(rs.getString("status"));
                returns.add(returnRequest);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting pending returns: " + e.getMessage());
        }
        
        return returns;
    }
}
