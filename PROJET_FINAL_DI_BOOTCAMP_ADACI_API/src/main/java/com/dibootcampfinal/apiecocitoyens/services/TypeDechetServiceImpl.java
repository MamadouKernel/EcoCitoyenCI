package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Traitement;
import com.dibootcampfinal.apiecocitoyens.models.TypeDechet;
import com.dibootcampfinal.apiecocitoyens.repository.TypeDechetRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class TypeDechetServiceImpl implements TypeDechetService{

    private TypeDechetRepository typeDechetRepository;
    @Override
    public TypeDechet save(TypeDechet typeDechet) {
        if (typeDechet == null) {
            throw new IllegalArgumentException("Type de dechet cannot be null");
        }
        return typeDechetRepository.save(typeDechet);
    }

    @Override
    public TypeDechet update(Long id, TypeDechet typeDechet) {
        if(typeDechet == null){
            throw new IllegalArgumentException("Type de dechet cannot be null");
        }

        TypeDechet existingTypeDechet = findById(id);
        existingTypeDechet.setLibelle(typeDechet.getLibelle());
        existingTypeDechet.setDescription(typeDechet.getDescription());
        existingTypeDechet.setCouleur(typeDechet.getCouleur());

        return typeDechetRepository.save(existingTypeDechet);
    }

    @Override
    public TypeDechet findById(Long id) {
        Optional<TypeDechet> optionalTypeDechet = typeDechetRepository.findById(id);
        if(optionalTypeDechet.isEmpty()) {
            throw new EntityNotFoundException("Type de dechet with id " + id + " not found");
        }
        return optionalTypeDechet.get();
    }

    @Override
    public List<TypeDechet> findAll() {
        return typeDechetRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        TypeDechet existingTypeDechet = findById(id);
        typeDechetRepository.delete(existingTypeDechet);
    }
}
