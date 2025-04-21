package com.example.myapp.service;

import com.example.myapp.model.Account;
import com.example.myapp.model.AccountType;
import com.example.myapp.model.Card;
import com.example.myapp.model.Customer;
import com.example.myapp.repository.AccountRepository;
import com.example.myapp.repository.CardRepository;
import com.example.myapp.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final CardRepository cardRepository;
    private final CardService cardService;

    public Account createAccount(Long customerId, AccountType type) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Account account = new Account(null, customer, type, BigDecimal.ZERO);

        Account savedAccount = accountRepository.save(account);

        if (type == AccountType.CARD) {
            Card card = new Card(null, cardService.generateCardNumber(), cardService.generateExpiryDate(), cardService.generateCVV(), savedAccount);
            cardRepository.save(card);
        }

        return savedAccount;
    }

}
