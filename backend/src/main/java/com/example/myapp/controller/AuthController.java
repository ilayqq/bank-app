package com.example.myapp.controller;

import com.example.myapp.config.JwtUtil;
import com.example.myapp.dto.AuthRequestDTO;
import com.example.myapp.model.Customer;
import com.example.myapp.repository.CustomerRepository;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final JwtUtil jwtUtil;
    private final CustomerRepository customerRepository;

    @PostMapping("/register")
    @Operation(summary = "Регистрация клиента")
    public ResponseEntity<?> register(@Valid @RequestBody Customer customer) {
        String phoneNumber = customer.getPhoneNumber();

        if (!customerRepository.findByPhoneNumber(phoneNumber).isEmpty()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Пользователь уже существует");
        }

        Customer newCustomer = customerRepository.save(customer);
        return ResponseEntity.ok(newCustomer);
    }

    @PostMapping("/login")
    @Operation(summary = "Авторизация клиента")
    public ResponseEntity<String> login(@RequestBody AuthRequestDTO request) {
        String phoneNumber = request.getPhoneNumber();

        List<Customer> customerOpt = customerRepository.findByPhoneNumber(phoneNumber);
        if (customerOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Пользователь не найден");
        }

        Customer customer = customerOpt.get(0);

        String token = jwtUtil.generateToken(phoneNumber, customer.getId());
        return ResponseEntity.ok(token);
    }
}
