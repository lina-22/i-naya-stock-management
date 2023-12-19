package com.inaya.stockmanagement.service.stock;

import com.inaya.stockmanagement.model.Stock;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockServiceImpl implements StockService{
    /**
     * @param stock
     * @return
     */
    @Override
    public Stock add(Stock stock) {
        return null;
    }

    /**
     * @param stock
     * @return
     */
    @Override
    public Stock update(Stock stock) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Stock> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<Stock> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
