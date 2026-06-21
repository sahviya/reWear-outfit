package com.rewear;
public class Seller extends User {
    public Seller() {
        super();
        setUserType("SELLER");
    }
    
    public Seller(String username, String password, String email, String fullName) {
        super(username, password, email, fullName, "SELLER");
    }
}
