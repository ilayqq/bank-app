package com.example.myapp.service;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Random;

@Service
public class CardService {
    public String generateCardNumber() {
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

    public String generateCVV() {
        return String.format("%03d", new Random().nextInt(1000));
    }

    public String generateExpiryDate() {
        LocalDate expiry = LocalDate.now().plusYears(3);
        return expiry.format(DateTimeFormatter.ofPattern("MM/yy"));
    }
}
