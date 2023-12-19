package com.inaya.stockmanagement.service.order;

import com.inaya.stockmanagement.model.Order;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService{
    /**
     * @param order
     * @return
     */
    @Override
    public Order add(Order order) {
        return null;
    }

    /**
     * @param order
     * @return
     */
    @Override
    public Order update(Order order) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Order> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<Order> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
