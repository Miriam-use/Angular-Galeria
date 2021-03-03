package com.tutorial.cloudinaryrest.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.tutorial.cloudinaryrest.security.entity.Rol;
import com.tutorial.cloudinaryrest.security.enums.RolNombre;
import com.tutorial.cloudinaryrest.security.service.RolService;

@Component
public class CreateRoles implements CommandLineRunner {
	
	@Autowired
	RolService rolService;
	
	public void run(String... arg) throws Exception {
		Rol rolAdmin = new Rol (RolNombre.ROLE_ADMIN);
		Rol rolUses = new Rol (RolNombre.ROLE_USER);
		rolService.save(rolAdmin);
		rolService.save(rolUses);
	}
}
