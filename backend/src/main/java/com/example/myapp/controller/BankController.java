package com.example.myapp.controller;

import com.example.myapp.model.Account;
import com.example.myapp.model.Customer;
import com.example.myapp.model.Transaction;
import com.example.myapp.service.BankService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Validated
public class BankController {

    private final BankService bankService;

    @Operation(summary = "Пополнение баланса")
    @PostMapping("/deposit/{accountId}")
    public Account deposit(@PathVariable Long accountId, @RequestParam BigDecimal amount) {
        return bankService.deposit(accountId, amount);
    }

    @Operation(summary = "Снятие средств")
    @PostMapping("/withdraw/{accountId}")
    public Account withdraw(@PathVariable Long accountId, @RequestParam BigDecimal amount) {
        return bankService.withdraw(accountId, amount);
    }

    @Operation(summary = "Получить историю транзакций")
    @GetMapping("/transactions/{accountId}")
    public List<Transaction> getTransactions(@PathVariable Long accountId) {
        return bankService.getTransactions(accountId);
    }
}
