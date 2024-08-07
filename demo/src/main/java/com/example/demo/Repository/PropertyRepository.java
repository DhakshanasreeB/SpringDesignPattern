package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    // Custom queries can be added here if needed
}
