package com.rewear;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

public class AuthServlet extends HttpServlet {
    private final UserDAO userDAO = new UserDAO();
    private final Gson gson = new Gson();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        resp.setContentType("application/json");

        BufferedReader reader = req.getReader();
        JsonObject jsonBody = gson.fromJson(reader, JsonObject.class);

        if ("/login".equals(pathInfo)) {
            String username = jsonBody.get("username").getAsString();
            String password = jsonBody.get("password").getAsString();

            User user = userDAO.loginUser(username, password);

            if (user != null) {
                JsonObject response = new JsonObject();
                response.addProperty("status", "success");
                response.addProperty("username", user.getUsername());
                response.addProperty("role", user.getUserType());
                resp.getWriter().write(gson.toJson(response));
            } else {
                resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                JsonObject response = new JsonObject();
                response.addProperty("status", "error");
                response.addProperty("message", "Invalid credentials");
                resp.getWriter().write(gson.toJson(response));
            }
        } else if ("/register".equals(pathInfo)) {
            User newUser = new User();
            newUser.setUsername(jsonBody.get("username").getAsString());
            newUser.setPassword(jsonBody.get("password").getAsString());
            newUser.setEmail(jsonBody.get("email").getAsString());
            
            if (jsonBody.has("fullName")) {
                newUser.setFullName(jsonBody.get("fullName").getAsString());
            }
            if (jsonBody.has("phone")) {
                newUser.setPhone(jsonBody.get("phone").getAsString());
            }
            if (jsonBody.has("address")) {
                newUser.setAddress(jsonBody.get("address").getAsString());
            }
            if (jsonBody.has("userType")) {
                newUser.setUserType(jsonBody.get("userType").getAsString());
            } else {
                newUser.setUserType("Buyer");
            }

            boolean success = userDAO.registerUser(newUser);

            if (success) {
                JsonObject response = new JsonObject();
                response.addProperty("status", "success");
                response.addProperty("message", "Registration successful");
                resp.getWriter().write(gson.toJson(response));
            } else {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                JsonObject response = new JsonObject();
                response.addProperty("status", "error");
                response.addProperty("message", "Registration failed");
                resp.getWriter().write(gson.toJson(response));
            }
        } else {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}
