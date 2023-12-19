package com.inaya.stockmanagement.dto;

import lombok.Data;

@Data
public class OrderDetailsDTO {

    private Long id;

    private String productName;

    private int quantity;

    private int unitPrice;

    private OrderDTO order;

}
