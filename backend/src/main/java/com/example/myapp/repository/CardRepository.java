package com.example.myapp.repository;

import com.example.myapp.model.Account;
import com.example.myapp.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    Optional<Card> findByAccount(Account account);
}
