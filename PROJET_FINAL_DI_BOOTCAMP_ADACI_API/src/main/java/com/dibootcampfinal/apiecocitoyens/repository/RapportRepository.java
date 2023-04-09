package com.dibootcampfinal.apiecocitoyens.repository;

import com.dibootcampfinal.apiecocitoyens.models.Rapport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RapportRepository extends JpaRepository<Rapport, Long> {
}
