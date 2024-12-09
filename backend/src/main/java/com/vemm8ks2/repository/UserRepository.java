package com.vemm8ks2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vemm8ks2.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

  public User findByEmail(String emeail);
}
