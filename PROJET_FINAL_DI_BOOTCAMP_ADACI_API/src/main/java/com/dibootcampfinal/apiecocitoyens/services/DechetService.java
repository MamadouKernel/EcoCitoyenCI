package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Dechet;

import java.util.List;

public interface DechetService {
    Dechet save(Dechet dechet);
    Dechet update(Long id, Dechet dechet);
    Dechet findById(Long id);
    List<Dechet> findAll();
    void delete(Long id);
}
