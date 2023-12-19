package com.inaya.stockmanagement.service.orderdetails;

import com.inaya.stockmanagement.model.OrderDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService{
    /**
     * @param orderDetails
     * @return
     */
    @Override
    public OrderDetails add(OrderDetails orderDetails) {
        return null;
    }

    /**
     * @param orderDetails
     * @return
     */
    @Override
    public OrderDetails update(OrderDetails orderDetails) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<OrderDetails> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<OrderDetails> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
