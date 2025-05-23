package com.example.myapp.repository;
import com.example.myapp.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findAllByCustomer_PhoneNumber(String customerPhoneNumber);
}