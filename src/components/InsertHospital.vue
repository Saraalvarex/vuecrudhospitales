<template>
 <div style="width: 500px; margin: 0 auto">
         <br>
    <form method="post" v-on:submit.prevent="insertHospital()">
        <h2 style="color: blue">Añadir hospital 🏥</h2>
        <h3 style="color: red">{{mensaje}}</h3>
        <input class="form-control" type="hidden"
        v-model="hospital.idHospital"
        /><br/>
        <label>Nombre: </label>
        <input class="form-control" type="text"
        v-model="hospital.nombre"
        /><br/>
        <label>Direccion: </label>
        <input class="form-control" type="text"
        v-model="hospital.direccion"
        /><br/>
        <label>Telefono: </label>
        <input class="form-control" type="text"
        v-model="hospital.telefono"
        /><br/>
        <label>Camas: </label>
        <input class="form-control" type="number"
        v-model="hospital.camas"
        /><br/>
         <router-link to="/" class="btn btn-warning">
            <span aria-hidden="true">&larr;</span> Back
        </router-link>
        <button class="btn btn-outline-success">➕ Añadir</button>
    </form>
 </div>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales';
const service = new ServiceHospitales();
export default {
 name: 'InsertHospital',
 data() {
 return {
   //  número aleatorio entre 0 y 100:
   hospital: {"idHospital": Math.floor(Math.random()*101),
               "nombre": "",
               "direccion": "",
               "telefono": "",
               "camas": 0
}, mensaje: ""
 };
 },
 methods: {
   insertHospital(){
       service.insertHospital(this.hospital).then(result=> {
        console.log(result)
        this.mensaje="Hospital inluido en base de datos";
         this.$router.push("/");
       })
    }
 }
};
</script>

<style scoped>

</style>