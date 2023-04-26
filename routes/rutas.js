import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion=new ControladorHabitaciones()
let controladorReserva=new ControladorReservas()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)

 //reservas
 rutas.get('/buscarreservas',controladorReserva.buscandoReserva)
 rutas.get('/buscarreserva/:idreserva',controladorReserva.buscandoReserva)
 rutas.post('/registrarreserva',controladorReserva.registrandoReserva) 
 rutas.put('/editarreserva',controladorReserva.editandoReserva)
 rutas.delete('/eliminarreserva',controladorReserva.eliminandoReserva)