package com.inaya.stockmanagement.service.depot;

import com.inaya.stockmanagement.model.Depot;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DepotServiceImpl implements DepotService{
    /**
     * @param depot
     * @return
     */
    @Override
    public Depot add(Depot depot) {
        return null;
    }

    /**
     * @param depot
     * @return
     */
    @Override
    public Depot update(Depot depot) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Depot> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<Depot> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
