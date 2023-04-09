package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Traitement;
import com.dibootcampfinal.apiecocitoyens.models.Utilisateur;
import com.dibootcampfinal.apiecocitoyens.repository.TraitementRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TraitementServiceImpl implements TraitementService{
    private TraitementRepository traitementRepository;
    @Override
    public Traitement save(Traitement traitement) {
        if (traitement == null) {
            throw new IllegalArgumentException("Traitement cannot be null");
        }
        return traitementRepository.save(traitement);
    }

    @Override
    public Traitement update(Long id, Traitement traitement) {
        if(traitement == null){
            throw new IllegalArgumentException("Traitement cannot be null");
        }
        Traitement existingTraitement = findById(id);
        existingTraitement.setLieuTraitement(traitement.getLieuTraitement());
        existingTraitement.setStatut(traitement.getStatut());
        existingTraitement.setQuantite(traitement.getQuantite());
        existingTraitement.setDechet(traitement.getDechet());
        return traitementRepository.save(existingTraitement);
    }

    @Override
    public Traitement findById(Long id) {
        Optional<Traitement> optionalTraitement = traitementRepository.findById(id);
        if(optionalTraitement.isEmpty()) {
            throw new EntityNotFoundException("Traitement with id " + id + " not found");
        }
        return optionalTraitement.get();
    }

    @Override
    public List<Traitement> findAll() {
        return traitementRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Traitement existingUtilisateur = findById(id);
        traitementRepository.delete(existingUtilisateur);
    }
}
