package com.example.myapp.controller;

import com.example.myapp.model.Customer;
import com.example.myapp.repository.CustomerRepository;
import com.example.myapp.service.CustomerService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerRepository customerRepository;

    @Operation(summary = "Создать клиента")
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    @Operation(summary = "Получить список клиентов")
    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @Operation(summary = "Получить клиента по номеру телефона")
    @GetMapping("/{phoneNumber}")
//    public List<Customer> getCustomer(@PathVariable String phoneNumber) {
//        return customerService.getCustomer(phoneNumber);
//    }
    public ResponseEntity<List<Customer>> getCustomer(@PathVariable String phoneNumber) {
//        List<Customer> customer = customerRepository.findByPhoneNumber(phoneNumber);
        List<Customer> customer = customerService.getCustomer(phoneNumber);
//                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Клиент не найден"));

        return ResponseEntity.ok(customer);
    }

    @Operation(summary = "Поиск")
    @GetMapping("/search")
    public ResponseEntity<List<Customer>> searchCustomers(
            @RequestParam("query")
            @Size(min = 2, message = "Минимальная длина запроса — 2 символа")
            String query) {
        List<Customer> result = customerService.searchCustomers(query);
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
}
