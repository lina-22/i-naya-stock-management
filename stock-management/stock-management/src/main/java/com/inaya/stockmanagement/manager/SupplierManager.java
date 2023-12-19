package com.inaya.stockmanagement.manager;

import com.inaya.stockmanagement.dto.SupplierDTO;
import com.inaya.stockmanagement.model.Supplier;
import com.inaya.stockmanagement.service.supplier.SupplierService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class SupplierManager {

    private final SupplierService supplierService;

    public SupplierManager(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    public SupplierDTO saveSupplier(SupplierDTO supplierDTO) {
        Supplier supplier = new Supplier();
        supplier.setName(supplierDTO.getName());
        supplier.setAddress(supplierDTO.getAddress());
        supplier.setEmail(supplierDTO.getEmail());
        supplier.setPhone(supplierDTO.getPhone());
        return modelToDto(supplierService.add(supplier));
    }

    public SupplierDTO updateSupplier(SupplierDTO supplierDto) {
        Supplier supplier = new Supplier();
        supplier.setId(supplierDto.getId());
        supplier.setName(supplierDto.getName());
        supplier.setPhone(supplierDto.getPhone());
        supplier.setEmail(supplierDto.getEmail());
        return modelToDto(supplierService.update(supplier));
    }

    public SupplierDTO getSupplierById(Long id) {
        Optional<Supplier> supplier = supplierService.findById(id);
        return supplier.map(this::modelToDto).orElseGet(null);
    }

    public List<SupplierDTO> getAllSupplier() {
        List<Supplier> supplierList = supplierService.getAll();
        List<SupplierDTO> supplierDTOS = new ArrayList<>();
        supplierList.forEach(data -> supplierDTOS.add(modelToDto(data)));
        return supplierDTOS;
    }

    public String deleteSupplier(Long id) {
        try {
            supplierService.delete(id);
            return "Supplier with " + id + " has been deleted";
        } catch (Exception e) {
            return "Supplier with " + id + " not found";
        }
    }

    private SupplierDTO modelToDto(Supplier supplier) {
        SupplierDTO supplierDTO = new SupplierDTO();
        supplierDTO.setId(supplier.getId());
        supplierDTO.setName(supplier.getName());
        supplierDTO.setAddress(supplier.getAddress());
        supplierDTO.setEmail(supplier.getEmail());
        supplierDTO.setPhone(supplier.getPhone());
        return supplierDTO;
    }


}
