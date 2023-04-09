package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Collecte;

import java.util.List;

public interface CollecteService {
    Collecte save(Collecte collecte);
    Collecte update(Long id, Collecte collecte);
    Collecte findById(Long id);
    List<Collecte> findAll();
    void delete(Long id);
}

