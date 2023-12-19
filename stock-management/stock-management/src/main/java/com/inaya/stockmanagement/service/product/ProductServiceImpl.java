package com.inaya.stockmanagement.service.product;

import com.inaya.stockmanagement.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    /**
     * @param product
     * @return
     */
    @Override
    public Product add(Product product) {
        return null;
    }

    /**
     * @param product
     * @return
     */
    @Override
    public Product update(Product product) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Product> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<Product> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
