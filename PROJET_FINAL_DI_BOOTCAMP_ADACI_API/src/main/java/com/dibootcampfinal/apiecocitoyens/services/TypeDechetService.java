package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.TypeDechet;

import java.util.List;

public interface TypeDechetService {
    TypeDechet save(TypeDechet typeDechet);
    TypeDechet update(Long id, TypeDechet typeDechet);
    TypeDechet findById(Long id);
    List<TypeDechet> findAll();
    void delete(Long id);
}
