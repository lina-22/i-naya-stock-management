package com.inaya.stockmanagement.service.user;

import com.inaya.stockmanagement.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    /**
     * @param user
     * @return
     */
    @Override
    public User add(User user) {
        return null;
    }

    /**
     * @param user
     * @return
     */
    @Override
    public User update(User user) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<User> getAll() {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }

    /**
     * @param id
     */
    @Override
    public void delete(Long id) {

    }
}
