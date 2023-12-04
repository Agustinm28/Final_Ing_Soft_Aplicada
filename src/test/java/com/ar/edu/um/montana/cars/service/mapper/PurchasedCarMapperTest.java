package com.ar.edu.um.montana.cars.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PurchasedCarMapperTest {

    private PurchasedCarMapper purchasedCarMapper;

    @BeforeEach
    public void setUp() {
        purchasedCarMapper = new PurchasedCarMapperImpl();
    }
}
