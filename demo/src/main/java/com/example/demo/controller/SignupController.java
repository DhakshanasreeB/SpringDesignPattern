package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Signup;
import com.example.demo.Service.SignupService;

@RestController
@RequestMapping("/api/signup")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping
    public ResponseEntity<Signup> register(@RequestBody Signup signup) {
        Signup registeredUser = signupService.register(signup);
        return ResponseEntity.status(201).body(registeredUser); // Created
    }
}
