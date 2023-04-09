package com.dibootcampfinal.apiecocitoyens.controllers;

import com.dibootcampfinal.apiecocitoyens.models.Dechet;
import com.dibootcampfinal.apiecocitoyens.services.DechetService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/dechets")
@AllArgsConstructor
public class DechetController {

    @Autowired
    private DechetService dechetService;

    @PostMapping("/create")
    public ResponseEntity<Dechet> createDechet(@Validated @RequestBody Dechet dechet) {
        Dechet createdDechet = dechetService.save(dechet);
        return new ResponseEntity<>(createdDechet, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dechet> getDechetById(@PathVariable("id") Long id) {
        Dechet dechet = dechetService.findById(id);
        return new ResponseEntity<>(dechet, HttpStatus.OK);
    }

    @GetMapping("/showAll")
    public ResponseEntity<List<Dechet>> getAllDechets() {
        List<Dechet> dechets = dechetService.findAll();
        return new ResponseEntity<>(dechets, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Dechet> updateDechet(@PathVariable("id") Long id, @Validated @RequestBody Dechet dechet) {
        try {
            Dechet updatedDechet = dechetService.update(id, dechet);
            return new ResponseEntity<>(updatedDechet, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteDechet(@PathVariable("id") Long id) {
        try {
            dechetService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
