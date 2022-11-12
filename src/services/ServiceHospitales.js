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
    insertHospital(hospital){
        return new Promise(function(resolve){
            var request = '/api/Hospitales/'
            var url = Global.url + request
            axios.post(url, hospital).then(res=> {
                resolve(res.data)
            })
        })
    }
    updateHospital(hospital){
        return new Promise(function(resolve){
            var request = 'api/Hospitales/';
            var url = Global.url + request;
            axios.put(url, hospital).then(response =>{
                resolve(response)
            })
        })
    }
    deleteHospital(idhospital){
        return new Promise(function(resolve){
            var request = 'api/hospitales/'+idhospital
            var url = Global.url+request
            axios.delete(url).then(response=>{
                resolve(response)
            })
        })
    }
}