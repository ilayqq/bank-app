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

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
public class CardController {
    private final CardRepository cardRepository;
    private final AccountRepository accountRepository;

    @GetMapping("/{accountId}")
    public ResponseEntity<Card> getCardByAccountId(@PathVariable Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        Card card = cardRepository.findByAccount(account)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        return ResponseEntity.ok(card);
    }
}
