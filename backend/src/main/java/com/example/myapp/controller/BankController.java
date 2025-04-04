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
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Validated
public class BankController {

    private final BankService bankService;

    @Operation(summary = "Создать клиента")
    @PostMapping("/customer")
    public Customer createCustomer(@RequestBody Customer customer) {
        return bankService.createCustomer(customer);
    }

    @Operation(summary = "Получить список клиентов")
    @GetMapping("/customer")
    public List<Customer> getCustomers() {
        return bankService.getCustomers();
    }
    
    @Operation(summary = "Получить клиента по номеру телефона")
    @GetMapping("/customer/{phoneNumber}")
    public List<Customer> getCustomer(@PathVariable String phoneNumber) {
        return bankService.getCustomer(phoneNumber);
    }

    @Operation(summary = "Поиск")
    @GetMapping("/customer/search")
    public ResponseEntity<List<Customer>> searchCustomers(
            @RequestParam("query")
            @Size(min = 2, message = "Минимальная длина запроса — 2 символа")
            String query) {
        List<Customer> result = bankService.searchCustomers(query);
        return ResponseEntity.ok(result);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<String> handleConstraintViolation(ConstraintViolationException ex) {
        String errorMessage = ex.getConstraintViolations()
                .stream()
                .map(ConstraintViolation::getMessage)
                .findFirst()
                .orElse("Неверный ввод");
        return ResponseEntity.badRequest().body(errorMessage);
    }

    @Operation(summary = "Создать банковский счет")
    @PostMapping("/account/{customerId}")
    public Account createAccount(@PathVariable Long customerId) {
        return bankService.createAccount(customerId);
    }

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
