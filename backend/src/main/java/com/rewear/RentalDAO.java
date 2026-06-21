package com.rewear;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RentalDAO {
    public boolean createRental(Rental rental) {
        String sql = "INSERT INTO rentals (order_id, product_id, buyer_id, start_date, end_date, rental_fee, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            
            pstmt.setInt(1, rental.getOrderId());
            pstmt.setInt(2, rental.getProductId());
            pstmt.setInt(3, rental.getBuyerId());
            pstmt.setString(4, rental.getStartDate());
            pstmt.setString(5, rental.getEndDate());
            pstmt.setDouble(6, rental.getRentalFee());
            pstmt.setString(7, rental.getStatus());
            
            int rowsAffected = pstmt.executeUpdate();
            
            if (rowsAffected > 0) {
                ResultSet rs = pstmt.getGeneratedKeys();
                if (rs.next()) {
                    rental.setRentalId(rs.getInt(1));
                }
                return true;
            }
            
        } catch (SQLException e) {
            System.err.println("Error creating rental: " + e.getMessage());
        }
        
        return false;
    }
    
    public Rental getRentalById(int rentalId) {
        String sql = "SELECT * FROM rentals WHERE rental_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, rentalId);
            
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                Rental rental = new Rental();
                rental.setRentalId(rs.getInt("rental_id"));
                rental.setOrderId(rs.getInt("order_id"));
                rental.setProductId(rs.getInt("product_id"));
                rental.setBuyerId(rs.getInt("buyer_id"));
                rental.setStartDate(rs.getString("start_date"));
                rental.setEndDate(rs.getString("end_date"));
                rental.setRentalFee(rs.getDouble("rental_fee"));
                rental.setStatus(rs.getString("status"));
                return rental;
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting rental: " + e.getMessage());
        }
        
        return null;
    }
    
    public List<Rental> getRentalsByBuyer(int buyerId) {
        List<Rental> rentals = new ArrayList<>();
        String sql = "SELECT * FROM rentals WHERE buyer_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, buyerId);
            
            ResultSet rs = pstmt.executeQuery();
            
            while (rs.next()) {
                Rental rental = new Rental();
                rental.setRentalId(rs.getInt("rental_id"));
                rental.setOrderId(rs.getInt("order_id"));
                rental.setProductId(rs.getInt("product_id"));
                rental.setBuyerId(rs.getInt("buyer_id"));
                rental.setStartDate(rs.getString("start_date"));
                rental.setEndDate(rs.getString("end_date"));
                rental.setRentalFee(rs.getDouble("rental_fee"));
                rental.setStatus(rs.getString("status"));
                rentals.add(rental);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting rentals by buyer: " + e.getMessage());
        }
        
        return rentals;
    }
    
    public boolean updateRentalStatus(int rentalId, String status) {
        String sql = "UPDATE rentals SET status = ? WHERE rental_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, status);
            pstmt.setInt(2, rentalId);
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            System.err.println("Error updating rental status: " + e.getMessage());
            return false;
        }
    }
    
    public List<Rental> getActiveRentals() {
        List<Rental> rentals = new ArrayList<>();
        String sql = "SELECT * FROM rentals WHERE status = 'ACTIVE'";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                Rental rental = new Rental();
                rental.setRentalId(rs.getInt("rental_id"));
                rental.setOrderId(rs.getInt("order_id"));
                rental.setProductId(rs.getInt("product_id"));
                rental.setBuyerId(rs.getInt("buyer_id"));
                rental.setStartDate(rs.getString("start_date"));
                rental.setEndDate(rs.getString("end_date"));
                rental.setRentalFee(rs.getDouble("rental_fee"));
                rental.setStatus(rs.getString("status"));
                rentals.add(rental);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting active rentals: " + e.getMessage());
        }
        
        return rentals;
    }
}
