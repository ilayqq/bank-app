package com.example.myapp.dto;

import lombok.Data;

@Data
public class AuthRequestDTO {
//    @NotBlank(message = "Phone number is required")
    private String phoneNumber;

//    @NotBlank(message = "Password is required")
    private String password;
}
