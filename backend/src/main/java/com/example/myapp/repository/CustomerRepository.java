package com.example.myapp.repository;
import com.example.myapp.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByPhoneNumber(String phoneNumber);

    List<Customer> findCustomersByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrPhoneNumberContainsIgnoreCaseOrEmailContainsIgnoreCase(String firstName, String lastName, String phoneNumber, String email);
}