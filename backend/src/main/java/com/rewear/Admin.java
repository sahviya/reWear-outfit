package com.rewear;
public class Admin extends User {
    public Admin() {
        super();
        setUserType("ADMIN");
    }
    
    public Admin(String username, String password, String email, String fullName) {
        super(username, password, email, fullName, "ADMIN");
    }
}
