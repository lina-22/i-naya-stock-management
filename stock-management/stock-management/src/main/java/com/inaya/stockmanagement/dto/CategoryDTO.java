package com.inaya.stockmanagement.dto;

import lombok.Data;

import java.util.Set;

@Data
public class CategoryDTO {

    private Long id;
    private String name;
    private Set<ProductDTO> productSet;

}
