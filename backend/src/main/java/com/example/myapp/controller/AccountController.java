package com.example.myapp.controller;

import com.example.myapp.model.Account;
import com.example.myapp.model.AccountType;
import com.example.myapp.repository.AccountRepository;
import com.example.myapp.service.AccountService;
import com.example.myapp.service.BankService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {
    private final AccountRepository accountRepository;
    private final AccountService accountService;

    @Operation(summary = "Список счетов по номеру телефона")
    @GetMapping("/{phoneNumber}")
    public ResponseEntity<List<Account>> getAccounts(@PathVariable String phoneNumber) {
        List<Account> accounts = accountRepository.findAllByCustomer_PhoneNumber(phoneNumber);
        return ResponseEntity.ok(accounts);
    }

    @Operation(summary = "Создать банковский счет")
    @PostMapping("/{customerId}")
    public Account createAccount(@PathVariable Long customerId, AccountType type) {
        return accountService.createAccount(customerId, type);
    }
}
