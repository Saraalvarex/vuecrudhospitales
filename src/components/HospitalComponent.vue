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
    <!-- <button class="btn btn-outline-success" @click="updateHospital()">Editar</button> -->
   <router-link :to="'/modificar/'+hospital.id" class="btn btn-success">Editar</router-link>  
  </div>
</div>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales';
const service = new ServiceHospitales();

export default {
 name: 'HospitalComponent',
 data() {
 return {
    hospital: {},
    statusbtn: false
    };
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