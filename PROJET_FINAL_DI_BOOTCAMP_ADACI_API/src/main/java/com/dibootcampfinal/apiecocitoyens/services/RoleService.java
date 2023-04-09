package com.dibootcampfinal.apiecocitoyens.services;

import com.dibootcampfinal.apiecocitoyens.models.Role;

import java.util.List;

public interface RoleService {
    Role save(Role role);
    Role update(Long id, Role role);
    Role findById(Long id);
    List<Role> findAll();
    void delete(Long id);
}
