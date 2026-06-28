package com.financer.IA.repository;

import com.financer.IA.entity.Transaction;
import com.financer.IA.repository.TransactionRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

}
