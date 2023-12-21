package com.inaya.stockmanagement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "order_product")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Column(name = "date")
    private LocalDateTime dateTime;

    @Column(name = "client_name")
    private String clientName;

    @Column(name = "client_email")
    private String clientEmail;

    @Column(name = "client_address")
    private String clientAddress;

    @Column(name = "status")
    private String status;

    @Column(name = "vat")
    private int vat;

    @Transient
    private BigDecimal priceWithVat;

    @PostLoad
    private void onLoad() {
        this.priceWithVat = (BigDecimal) this.orderDetails
                .stream()
                .map(order ->
                        (order.getUnitPrice())
                                .multiply(BigDecimal
                                        .valueOf(order.getQuantity()))
                                .multiply(BigDecimal.valueOf(this.vat)));
    }

    @JsonIgnore
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<OrderDetails> orderDetails;
}
