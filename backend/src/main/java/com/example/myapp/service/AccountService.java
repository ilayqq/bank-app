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

    public Account createAccount(Long customerId, AccountType type) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Account account = new Account(null, customer, type, BigDecimal.ZERO);

        Account savedAccount = accountRepository.save(account);

        if (type == AccountType.CARD) {
            Card card = new Card(null, generateCardNumber(), savedAccount);
            cardRepository.save(card);
        }

        return savedAccount;
    }

    private String generateCardNumber() {
        Random rnd = new Random();
        StringBuilder rawNumber = new StringBuilder();

        // Первая цифра — 4 (например, для Visa)
        rawNumber.append("4");
        for (int i = 0; i < 14; i++) {
            rawNumber.append(rnd.nextInt(10));
        }

        int checkDigit = generateLuhnCheckDigit(rawNumber.toString());
        rawNumber.append(checkDigit);

        return formatCardNumber(rawNumber.toString());
    }

    private int generateLuhnCheckDigit(String numberWithoutCheckDigit) {
        int sum = 0;
        boolean alternate = true;

        for (int i = numberWithoutCheckDigit.length() - 1; i >= 0; i--) {
            int n = Character.getNumericValue(numberWithoutCheckDigit.charAt(i));
            if (alternate) {
                n *= 2;
                if (n > 9) n -= 9;
            }
            sum += n;
            alternate = !alternate;
        }

        return (10 - (sum % 10)) % 10;
    }

    private String formatCardNumber(String number) {
        return number.replaceAll("(.{4})", "$1 ").trim();
    }

}
