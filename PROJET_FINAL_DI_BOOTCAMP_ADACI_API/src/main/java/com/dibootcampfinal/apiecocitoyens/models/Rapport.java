package com.dibootcampfinal.apiecocitoyens.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Rapport")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rapport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String libelle;

    private LocalDate dateCollecte;

    private int quantiteCollecte;

    private int cout;

    @Column(name = "created_date")
    private LocalDate createdDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dechet_id")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private Dechet dechet;

    // Getters and setters
}
