package com.rewear;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static Connection connection;
    
    private DBConnection() {}
    
    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                
                String url = System.getenv("DB_URL");
                String username = System.getenv("DB_USER");
                String password = System.getenv("DB_PASSWORD");
                
                if (url == null || url.isEmpty()) {
                    url = "jdbc:mysql://localhost:3306/rewear";
                }
                if (username == null || username.isEmpty()) {
                    username = "root";
                }
                if (password == null) {
                    password = "";
                }

                connection = DriverManager.getConnection(url, username, password);
                System.out.println("Database connection established successfully.");
            } catch (ClassNotFoundException e) {
                System.err.println("MySQL JDBC Driver not found. Add the MySQL Connector/J JAR to your classpath.");
                e.printStackTrace();
                throw new SQLException("MySQL JDBC Driver not found");
            }
        }
        return connection;
    }
    
    public static void closeConnection() {
        if (connection != null) {
            try {
                connection.close();
                System.out.println("Database connection closed.");
            } catch (SQLException e) {
                System.err.println("Error closing database connection: " + e.getMessage());
            }
        }
    }
}
