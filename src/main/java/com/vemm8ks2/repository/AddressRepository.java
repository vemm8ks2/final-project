package com.vemm8ks2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vemm8ks2.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
