package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.LoginService;
import com.example.demo.model.Login;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody Login login) {
        Login authenticatedUser = loginService.authenticate(login.getEmail(), login.getPassword());
        if (authenticatedUser != null) {
            return "Login successful!";
        } else {
            return "Invalid email or password!";
        }
    }
}
