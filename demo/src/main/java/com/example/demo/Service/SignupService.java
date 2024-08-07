package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Signup;
import com.example.demo.Repository.SignupRepository;

@Service
public class SignupService {

    @Autowired
    private SignupRepository signupRepository;

    public Signup register(Signup signup) {
        // Business logic for registering a user
        return signupRepository.save(signup);
    }
}
