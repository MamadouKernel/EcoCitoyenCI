package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Rapport;

import java.util.List;

public interface RapportService {
    Rapport save(Rapport rapport);
    Rapport update(Long id, Rapport rapport);
    Rapport findById(Long id);
    List<Rapport> findAll();
    void delete(Long id);
}
