package com.example.demo.Service;

import com.example.demo.model.Login;
import com.example.demo.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login authenticate(String email, String password) {
        // Fetch the user by email
        Login login = loginRepository.findById(email).orElse(null);

        // Check if the user exists and the password matches
        if (login != null && login.getPassword().equals(password)) {
            return login;
        } else {
            return null;
        }
    }
}
