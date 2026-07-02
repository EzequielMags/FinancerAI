package com.financer.IA.service;

import com.financer.IA.dto.TransactionDTO;
import com.financer.IA.entity.Transaction;
import com.financer.IA.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction save(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();
        transaction.setType(transactionDTO.getType());
        transaction.setAmount(transactionDTO.getAmount());
        transaction.setCategory(transactionDTO.getCategory());
        transaction.setDescription(transactionDTO.getDescription());

        return transactionRepository.save(transaction);
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    public Map<String, BigDecimal> getSummary() {
        BigDecimal totalIncome = transactionRepository.sumByType("income");
        BigDecimal totalExpense = transactionRepository.sumByType("expense");
        BigDecimal balance = totalIncome.subtract(totalExpense);

        Map<String, BigDecimal> summary = new HashMap<>();
        summary.put("totalIncome", totalIncome);
        summary.put("totalExpense", totalExpense);
        summary.put("balance", balance);

        return summary;
    }

}


