package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Signup;

public interface SignupRepository extends JpaRepository<Signup, String> {
}
