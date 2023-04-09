package com.dibootcampfinal.apiecocitoyens.controllers;

import com.dibootcampfinal.apiecocitoyens.models.Rapport;
import com.dibootcampfinal.apiecocitoyens.services.RapportService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rapports")
@AllArgsConstructor
public class RapportController {

    @Autowired
    private RapportService rapportService;

    @PostMapping("/create")
    public ResponseEntity<Rapport> createRapport(@RequestBody Rapport rapport) {
        try {
            Rapport newRapport = rapportService.save(rapport);
            return ResponseEntity.status(HttpStatus.CREATED).body(newRapport);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rapport> getRapportById(@PathVariable Long id) {
        try {
            Rapport rapport = rapportService.findById(id);
            return ResponseEntity.status(HttpStatus.OK).body(rapport);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Rapport> updateRapport(@PathVariable Long id, @RequestBody Rapport rapport) {
        try {
            Rapport updatedRapport = rapportService.update(id, rapport);
            return ResponseEntity.status(HttpStatus.OK).body(updatedRapport);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteRapport(@PathVariable Long id) {
        try {
            rapportService.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/showAll")
    public ResponseEntity<List<Rapport>> getAllRapports() {
        List<Rapport> rapports = rapportService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(rapports);
    }
}
