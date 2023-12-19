package com.inaya.stockmanagement.dto;

import lombok.Data;

@Data
public class StockDTO {

    private Long id;

    private int quantity;

    private DepotDTO depot;

}
