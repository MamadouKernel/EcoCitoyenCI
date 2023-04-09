package com.dibootcampfinal.apiecocitoyens.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "collecte")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Collecte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "statut")
    private String statut;

    @Column(name = "quantite")
    private Integer quantite;

    @ManyToOne
    @JoinColumn(name = "id_dechet")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private Dechet dechet;

    @Column(name = "created_date")
    private LocalDateTime created_date;

    @PrePersist
    public void onPrePersist() {
        this.created_date = LocalDateTime.now();
    }

}

