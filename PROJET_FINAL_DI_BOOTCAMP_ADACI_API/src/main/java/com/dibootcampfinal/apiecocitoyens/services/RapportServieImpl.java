package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Dechet;
import com.dibootcampfinal.apiecocitoyens.models.Rapport;
import com.dibootcampfinal.apiecocitoyens.repository.RapportRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RapportServieImpl implements RapportService {
    @Autowired
    private RapportRepository rapportRepository;
    @Override
    public Rapport save(Rapport rapport) {
        if (rapport == null) {
            throw new IllegalArgumentException("Rapport cannot be null");
        }
        return rapportRepository.save(rapport);
    }

    @Override
    public Rapport update(Long id, Rapport rapport) {
        if (rapport == null) {
            throw new IllegalArgumentException("Rapport cannot be null");
        }
        Rapport existingRapport = findById(id);
        existingRapport.setLibelle( rapport.getLibelle());
        existingRapport.setQuantiteCollecte(rapport.getQuantiteCollecte());
        existingRapport.setDateCollecte(rapport.getDateCollecte());
        existingRapport.setCout(rapport.getCout());
        return rapportRepository.save(existingRapport);
    }

    @Override
    public Rapport findById(Long id) {
        Optional<Rapport> optionalRapport = rapportRepository.findById(id);
        if(optionalRapport.isEmpty()) {
            throw new EntityNotFoundException("Rapport with id " + id + " not found");
        }
        return optionalRapport.get();
    }

    @Override
    public List<Rapport> findAll() {
        return rapportRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Rapport existingRapport = findById(id);
        rapportRepository.delete(existingRapport);
    }
}
