import axios from "axios";
import Global from './../Global'

export default class ServiceHospitales {
    getHospitales(){
        return new Promise(function(resolve){
            var request = 'api/Hospitales';
            var url = Global.url+request;
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }
    getHospital(idhospital){
        return new Promise(function(resolve){
            var request = 'api/Hospitales/'+idhospital;
            var url = Global.url + request;
            axios.get(url).then(response =>{
                resolve(response.data)
            })
        })
    }
    // putHospital(idhospital){
    //     return new Promise(function(resolve){
    //         var request = 'api/Hospitales/';
    //         var url = Global.url + request;
    //         const data = {
    //             "idHospital": 0,
    //             "nombre": "la pazzzz",
    //             "direccion": "castellana 1000",
    //             "telefono": "923-5411",
    //             "camas": 412
    //         }
    //         axios.put(url, data).then(response =>{
    //             resolve(response)
    //         })
    //     })
    // }
}