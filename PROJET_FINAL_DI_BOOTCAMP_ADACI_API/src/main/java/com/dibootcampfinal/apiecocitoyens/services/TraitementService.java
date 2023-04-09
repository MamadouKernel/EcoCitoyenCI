package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Traitement;

import java.util.List;

public interface TraitementService {
    Traitement save(Traitement traitement);
    Traitement update(Long id, Traitement traitement);
    Traitement findById(Long id);
    List<Traitement> findAll();
    void delete(Long id);
}

