package com.inaya.stockmanagement.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class DepotDTO {

    private Long id;

    private String name;

    private String address;

    private String email;

    private String phone;

    private Set<StockDTO> stock = new HashSet<>();

    private List<ProductDTO> productList;

}
