package com.dibootcampfinal.apiecocitoyens.repository;

import com.dibootcampfinal.apiecocitoyens.models.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
}
