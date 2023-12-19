package com.inaya.stockmanagement.service.supplier;

import com.inaya.stockmanagement.model.Supplier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierServiceImpl implements SupplierService{
    /**
     * @param supplier
     * @return
     */
    @Override
    public Supplier add(Supplier supplier) {
        return null;
    }

    /**
     * @param supplier
     * @return
     */
    @Override
    public Supplier update(Supplier supplier) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Supplier> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<Supplier> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
