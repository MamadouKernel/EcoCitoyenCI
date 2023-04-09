package com.dibootcampfinal.apiecocitoyens.controllers;

import com.dibootcampfinal.apiecocitoyens.models.Traitement;
import com.dibootcampfinal.apiecocitoyens.services.TraitementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/traitements")
public class TraitementController {

    private final TraitementService traitementService;

    @Autowired
    public TraitementController(TraitementService traitementService) {
        this.traitementService = traitementService;
    }

    @GetMapping("/showAll")
    public ResponseEntity<List<Traitement>> getAllTraitements() {
        List<Traitement> traitements = traitementService.findAll();
        return new ResponseEntity<>(traitements, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Traitement> getTraitementById(@PathVariable Long id) {
        Traitement traitement;
        try {
            traitement = traitementService.findById(id);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(traitement, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Traitement> createTraitement(@RequestBody @Validated Traitement traitement) {
        Traitement createdTraitement = traitementService.save(traitement);
        return new ResponseEntity<>(createdTraitement, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Traitement> updateTraitement(@PathVariable Long id, @RequestBody @Validated Traitement traitement) {
        Traitement updatedTraitement;
        try {
            updatedTraitement = traitementService.update(id, traitement);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedTraitement, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTraitement(@PathVariable Long id) {
        try {
            traitementService.delete(id);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
