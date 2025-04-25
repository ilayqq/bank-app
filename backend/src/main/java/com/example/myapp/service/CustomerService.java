package com.example.myapp.service;

import com.example.myapp.model.Customer;
import com.example.myapp.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Cacheable(value = "customers", key = "#a0")
    public List<Customer> getCustomer(String phoneNumber) {
        return customerRepository.findByPhoneNumber(phoneNumber);
    }

    public List<Customer> searchCustomers(String query) {
        return customerRepository.findCustomersByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrPhoneNumberContainsIgnoreCaseOrEmailContainsIgnoreCase(query, query, query, query);
    }
}
