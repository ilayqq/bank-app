package com.example.myapp.service;

import com.example.myapp.model.Account;
import com.example.myapp.model.Customer;
import com.example.myapp.model.Transaction;
import com.example.myapp.repository.AccountRepository;
import com.example.myapp.repository.CustomerRepository;
import com.example.myapp.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BankService {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public List<Customer> getCustomer(String phoneNumber) {
        return customerRepository.findByPhoneNumber(phoneNumber);
    }

    public List<Customer> searchCustomers(String query) {
        return customerRepository.findCustomersByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrPhoneNumberContainsIgnoreCaseOrEmailContainsIgnoreCase(query, query, query, query);
    }

    public Account createAccount(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        Account account = new Account(null, customer, BigDecimal.ZERO);
        return accountRepository.save(account);
    }

    @Transactional
    public Account deposit(Long accountId, BigDecimal amount) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        account.setBalance(account.getBalance().add(amount));
        accountRepository.save(account);

        Transaction transaction = new Transaction(null, account, amount, "DEPOSIT", null);
        transactionRepository.save(transaction);

        return account;
    }

    @Transactional
    public Account withdraw(Long accountId, BigDecimal amount) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        if (account.getBalance().compareTo(amount) < 0) {
            throw new RuntimeException("Insufficient funds");
        }

        account.setBalance(account.getBalance().subtract(amount));
        accountRepository.save(account);

        Transaction transaction = new Transaction(null, account, amount, "WITHDRAWAL", null);
        transactionRepository.save(transaction);

        return account;
    }

    public List<Transaction> getTransactions(Long accountId) {
        return transactionRepository.findAll();
    }
}