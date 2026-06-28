package com.financer.IA.controller;

import com.financer.IA.dto.TransactionDTO;
import com.financer.IA.entity.Transaction;
import com.financer.IA.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        Transaction transaction = transactionService.save(transactionDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(transaction);
    }
}
