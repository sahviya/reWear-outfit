package com.rewear;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

public class OrderServlet extends HttpServlet {
    private final OrderDAO orderDAO = new OrderDAO();
    private final Gson gson = new Gson();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        String pathInfo = req.getPathInfo();
        String buyerIdStr = req.getParameter("buyerId");

        if (buyerIdStr != null) {
            try {
                int buyerId = Integer.parseInt(buyerIdStr);
                List<Order> orders = orderDAO.getOrdersByBuyer(buyerId);
                resp.getWriter().write(gson.toJson(orders));
            } catch (NumberFormatException e) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\":\"Invalid buyer ID\"}");
            }
        } else if (pathInfo != null && !pathInfo.equals("/")) {
            try {
                int orderId = Integer.parseInt(pathInfo.substring(1));
                Order order = orderDAO.getOrderById(orderId);
                if (order != null) {
                    resp.getWriter().write(gson.toJson(order));
                } else {
                    resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                    resp.getWriter().write("{\"error\":\"Order not found\"}");
                }
            } catch (NumberFormatException e) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\":\"Invalid order ID\"}");
            }
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\":\"Missing parameters\"}");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        BufferedReader reader = req.getReader();
        Order newOrder = gson.fromJson(reader, Order.class);

        // Simple validation
        if (newOrder == null || newOrder.getProductId() == 0) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\":\"Invalid order data\"}");
            return;
        }

        if (newOrder.getOrderType() == null) {
            newOrder.setOrderType("Purchase");
        }
        if (newOrder.getStatus() == null) {
            newOrder.setStatus("Confirmed");
        }

        boolean success = orderDAO.createOrder(newOrder);

        if (success) {
            JsonObject response = new JsonObject();
            response.addProperty("status", "success");
            response.addProperty("orderId", newOrder.getOrderId());
            response.addProperty("message", "Order placed successfully");
            resp.getWriter().write(gson.toJson(response));
        } else {
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            JsonObject response = new JsonObject();
            response.addProperty("status", "error");
            response.addProperty("message", "Failed to place order");
            resp.getWriter().write(gson.toJson(response));
        }
    }
}
