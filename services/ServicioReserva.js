import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva{
    constructor(){}
    async registrar(datosHabitacion){
        let reservaNueva=new modeloReserva(datosReserva)
        return await reservaNueva.save()
    }
    async buscarTodas(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }
    async buscarPorId(idReserva){
        let reserva=await modeloReserva.findById(idReserva)
        return reserva
    }
    async editar(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }

}