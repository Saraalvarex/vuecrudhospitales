<template>
<br/>
<div class="card" style="width: 18rem; margin: 0 auto;">
  <div class="card-body">
    <h5 class="card-title">Hospital {{hospital.nombre}}</h5>
  <hr/>
  </div>
  <div class="card-body">
    <p class="card-text">Dirección: {{hospital.direccion}}</p>
    <p class="card-text">Teléfono: {{hospital.telefono}}</p>
    <p class="card-text">Camas: {{hospital.camas}}</p>
   <router-link to="/" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <!-- <a href="#" class="card-link">Link</a> -->
    <button class="btn btn-outline-success" @click="updateHospital()">Editar</button>
    <!-- <router-link :to="'/modificar/'+hospital.id" class="btn btn-success">Editar</router-link> -->
     <div style="width: 500px; margin: 0 auto" v-if="statusbtn==true">
    <form method="post" v-on:submit.prevent="updateHospital()">
        <label style="color: red">Estás modificando el hospital: {{hospital.nombre}}</label>
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
        <input class="form-control" type="text"
        v-model="hospital.camas"
        /><br/>
        <button class="btn btn-success">Modificar</button>
    </form>
 </div>
  </div>
</div>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales';
const service = new ServiceHospitales();
const Swal = require('sweetalert2');

export default {
 name: 'HospitalComponent',
 data() {
 return {
    hospital: {},
    statusbtn: false
    };
 },
 methods: {
    updateHospital(){
        this.statusbtn=true;
        Swal.fire({
            title: '¿Estás seguro de que quieres editar el hospital nº '+this.hospital+'?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '##54FF72',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Editar'
        }).then((result) => {
        if (result.isConfirmed) {
            service.updateHospital(this.hospital).then(result=> {
                console.log(result);
                service.getHospital().then(result=>{
                    this.hospital=result;
                })
            })
            Swal.fire(   
            '¡Editado!',
            'El hospital ha sido editado.',
            'success'
            )
        }
    })
    }
 },
 mounted(){
    service.getHospital(this.$route.params.idhospital).then(result=>{
        this.hospital=result;
    })
 },
//  Para que actualice el hospital seleccionado
 updated(){
     service.getHospital(this.$route.params.idhospital).then(result=>{
        this.hospital=result;
    })
 }
};
</script>

<style scoped>

</style>