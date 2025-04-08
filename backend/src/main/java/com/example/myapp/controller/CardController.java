package com.example.myapp.controller;

import com.example.myapp.model.Account;
import com.example.myapp.model.Card;
import com.example.myapp.repository.AccountRepository;
import com.example.myapp.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
public class CardController {
    private final CardRepository cardRepository;
    private final AccountRepository accountRepository;

    @GetMapping("/{phoneNumber}")
    public ResponseEntity<List<Card>> getCardsByAccountId(@PathVariable String phoneNumber) {
        List<Card> cards = cardRepository.findAllByAccount_Customer_PhoneNumber(phoneNumber);
        return ResponseEntity.ok(cards);
    }
}
