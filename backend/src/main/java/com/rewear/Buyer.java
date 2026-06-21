package com.rewear;
public class Buyer extends User {
    public Buyer() {
        super();
        setUserType("BUYER");
    }
    
    public Buyer(String username, String password, String email, String fullName) {
        super(username, password, email, fullName, "BUYER");
    }
}
