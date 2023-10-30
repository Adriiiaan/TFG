package com.market.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.model.Cliente;
import com.market.repository.ClientesRepository;
@Service
public class ClientesServicelmpl implements ClientesService {

	@Autowired
	ClientesRepository clienteRepository;
	
	
	@Override
	public Cliente auenticarCliente(String usuario, String password) {
	 
		return clienteRepository.findByUsuarioAndPassword(usuario, password);
	}

	@Override
	public boolean registrarCliente(Cliente cliente) {
		
		if(clienteRepository.findById(cliente.getUsuario()).isPresent()){		
		return false;
		}
		clienteRepository.save(cliente);
		return true;
	}

}
