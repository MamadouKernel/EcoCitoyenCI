package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Collecte;
import com.dibootcampfinal.apiecocitoyens.models.Utilisateur;
import com.dibootcampfinal.apiecocitoyens.repository.CollecteRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CollecteServiceImpl implements CollecteService {
    @Autowired
    private CollecteRepository collecteRepository;

    @Override
    public Collecte save(Collecte collecte) {
        if (collecte == null) {
            throw new IllegalArgumentException("Collecte cannot be null");
        }
        return collecteRepository.save(collecte);
    }

    @Override
    public Collecte update(Long id, Collecte collecte) {
        if (collecte == null) {
            throw new IllegalArgumentException("Collecte cannot be null");
        }
        Collecte existingCollecte = findById(id);
        existingCollecte.setDate(collecte.getDate());
        existingCollecte.setStatut(collecte.getStatut());
        existingCollecte.setQuantite(collecte.getQuantite());
        existingCollecte.setDechet(collecte.getDechet());
        return collecteRepository.save(existingCollecte);
    }

    @Override
    public Collecte findById(Long id) {
        Optional<Collecte> optionalUtilisateur = collecteRepository.findById(id);
        if(optionalUtilisateur.isEmpty()) {
            throw new EntityNotFoundException("Collecte with id " + id + " not found");
        }
        return optionalUtilisateur.get();
    }

    @Override
    public List<Collecte> findAll() {
        return collecteRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Collecte existingUtilisateur = findById(id);
        collecteRepository.delete(existingUtilisateur);
    }
}
