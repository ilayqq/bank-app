package com.example.myapp.controller;

import com.example.myapp.config.JwtUtil;
import com.example.myapp.dto.AuthRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequestDTO request) {
        String phoneNumber = request.getPhoneNumber();
        String password = request.getPassword();

        Long customerId = 42L;
        String token = jwtUtil.generateToken(phoneNumber, customerId);
        return ResponseEntity.ok(token);
    }
}
