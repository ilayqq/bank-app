package com.example.myapp.repository;

import com.example.myapp.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findAllByAccount_Customer_PhoneNumber(String phoneNumber);
}
