package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Collecte;
import com.dibootcampfinal.apiecocitoyens.models.Dechet;
import com.dibootcampfinal.apiecocitoyens.repository.DechetRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class DechetServiceImpl implements DechetService{

    @Autowired
    private DechetRepository dechetRepository;
    @Override
    public Dechet save(Dechet dechet) {
        if (dechet == null) {
            throw new IllegalArgumentException("Dechet cannot be null");
        }
        return dechetRepository.save(dechet);
    }

    @Override
    public Dechet update(Long id, Dechet dechet) {
        if (dechet == null) {
            throw new IllegalArgumentException("Dechet cannot be null");
        }
        Dechet existingDechet = findById(id);
        existingDechet.setLibelle(dechet.getLibelle());
        existingDechet.setOrigine(dechet.getOrigine());
        existingDechet.setImage(dechet.getImage());
        existingDechet.setTypeDechet(dechet.getTypeDechet());
        return dechetRepository.save(existingDechet);
    }

    @Override
    public Dechet findById(Long id) {
        Optional<Dechet> optionalDechet = dechetRepository.findById(id);
        if(optionalDechet.isEmpty()) {
            throw new EntityNotFoundException("Dechet with id " + id + " not found");
        }
        return optionalDechet.get();
    }

    @Override
    public List<Dechet> findAll() {
        return dechetRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Dechet existingDechet = findById(id);
        dechetRepository.delete(existingDechet);
    }
}
