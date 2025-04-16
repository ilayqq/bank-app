package com.example.myapp.config;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    private final String SECRET_KEY = "secretKey";
    private final long EXPIRATION_TIME = 86400000;

    private String generateToken(String phoneNumber, Long customerId) {
        return Jwts.builder()
                .claim("customerId", customerId)
                .claim("phoneNumber", phoneNumber)
                .setSubject(String.valueOf(customerId))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
