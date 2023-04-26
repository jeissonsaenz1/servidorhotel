import { ServicioReserva, ServicioReservas } from "../services/ServicioReserva.js"
export class ControladorReservas {
    constructor(){}
    async registrandoReserva(peticion,respuesta){
        let objetoservicioReserva=new ServicioReserva()
        try{
            let datosReserva=peticion.body
            await objetoservicioReserva.registrar(datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
    async buscandoReserva(peticion,respuesta){
        let objetoservicioReserva=new ServicioReserva()
        try{
            let idReserva=peticion.params.idreserva
            respuesta.status(200).json({
                "mensaje":"exito buscando la reserva",
                "reserva":await objetoservicioReserva.buscarPorId(idReserva)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
    async buscandoReservas(peticion,respuesta){
        let objetoservicioReserva=new ServicioReserva()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando las reservas",
                "reservas":await objetoservicioReserva.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
    async editandoReserva(peticion,respuesta){
        let idReserva=peticion.params.idreserva
        let datosReserva=peticion.body
        
        let objetoservicioReserva=new ServicioReserva()

        try{
            await objetoservicioReserva.editar(idReserva,datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito editando la reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
    eliminandoReserva(peticion,respuesta){
        let idReserva=peticion.params.idreserva
        let datosReserva=peticion.body
        console.log(idReserva)
        console.log(datosReserva)
        try{
            respuesta.status(200).json({
                "mensaje":"exito eliminando la reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion"+error
            })
        }
    }
}