package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Utilisateur;

import java.util.List;

public interface UtilisateurService {
    Utilisateur save(Utilisateur utilisateur);
    Utilisateur update(Long id, Utilisateur utilisateur);
    Utilisateur findById(Long id);
    List<Utilisateur> findAll();
    void delete(Long id);
}


