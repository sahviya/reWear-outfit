package com.rewear;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OrderDAO {
    public boolean createOrder(Order order) {
        String sql = "INSERT INTO orders (buyer_id, product_id, order_type, total_amount, status) VALUES (?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            
            pstmt.setInt(1, order.getBuyerId());
            pstmt.setInt(2, order.getProductId());
            pstmt.setString(3, order.getOrderType());
            pstmt.setDouble(4, order.getTotalAmount());
            pstmt.setString(5, order.getStatus());
            
            int rowsAffected = pstmt.executeUpdate();
            
            if (rowsAffected > 0) {
                ResultSet rs = pstmt.getGeneratedKeys();
                if (rs.next()) {
                    order.setOrderId(rs.getInt(1));
                }
                return true;
            }
            
        } catch (SQLException e) {
            System.err.println("Error creating order: " + e.getMessage());
        }
        
        return false;
    }
    
    public Order getOrderById(int orderId) {
        String sql = "SELECT * FROM orders WHERE order_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, orderId);
            
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                Order order = new Order();
                order.setOrderId(rs.getInt("order_id"));
                order.setBuyerId(rs.getInt("buyer_id"));
                order.setProductId(rs.getInt("product_id"));
                order.setOrderType(rs.getString("order_type"));
                order.setTotalAmount(rs.getDouble("total_amount"));
                order.setOrderDate(rs.getString("order_date"));
                order.setStatus(rs.getString("status"));
                return order;
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting order: " + e.getMessage());
        }
        
        return null;
    }
    
    public List<Order> getOrdersByBuyer(int buyerId) {
        List<Order> orders = new ArrayList<>();
        String sql = "SELECT * FROM orders WHERE buyer_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, buyerId);
            
            ResultSet rs = pstmt.executeQuery();
            
            while (rs.next()) {
                Order order = new Order();
                order.setOrderId(rs.getInt("order_id"));
                order.setBuyerId(rs.getInt("buyer_id"));
                order.setProductId(rs.getInt("product_id"));
                order.setOrderType(rs.getString("order_type"));
                order.setTotalAmount(rs.getDouble("total_amount"));
                order.setOrderDate(rs.getString("order_date"));
                order.setStatus(rs.getString("status"));
                orders.add(order);
            }
            
        } catch (SQLException e) {
            System.err.println("Error getting orders by buyer: " + e.getMessage());
        }
        
        return orders;
    }
    
    public boolean updateOrderStatus(int orderId, String status) {
        String sql = "UPDATE orders SET status = ? WHERE order_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, status);
            pstmt.setInt(2, orderId);
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            System.err.println("Error updating order status: " + e.getMessage());
            return false;
        }
    }
}
