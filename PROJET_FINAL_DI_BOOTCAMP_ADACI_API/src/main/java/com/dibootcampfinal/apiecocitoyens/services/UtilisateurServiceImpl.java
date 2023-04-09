package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Utilisateur;
import com.dibootcampfinal.apiecocitoyens.repository.UtilisateurRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UtilisateurServiceImpl implements UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Utilisateur save(Utilisateur utilisateur) {
        if(utilisateur == null) {
            throw new IllegalArgumentException("Utilisateur cannot be null");
        }
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur update(Long id, Utilisateur utilisateur) {
        if(utilisateur == null) {
            throw new IllegalArgumentException("Utilisateur cannot be null");
        }
        Utilisateur existingUtilisateur = findById(id);
        existingUtilisateur.setNom(utilisateur.getNom());
        existingUtilisateur.setPrenom(utilisateur.getPrenom());
        existingUtilisateur.setUsername(utilisateur.getUsername());
        existingUtilisateur.setEmail(utilisateur.getEmail());
        existingUtilisateur.setPassword(utilisateur.getPassword());
        return utilisateurRepository.save(existingUtilisateur);
    }

    @Override
    public Utilisateur findById(Long id) {
        Optional<Utilisateur> optionalUtilisateur = utilisateurRepository.findById(id);
        if(optionalUtilisateur.isEmpty()) {
            throw new EntityNotFoundException("Utilisateur with id " + id + " not found");
        }
        return optionalUtilisateur.get();
    }

    @Override
    public List<Utilisateur> findAll() {
        return utilisateurRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Utilisateur existingUtilisateur = findById(id);
        utilisateurRepository.delete(existingUtilisateur);
    }
}
