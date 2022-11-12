<template>
<h1>Hospitales</h1>
<div class="row">
  <div v-for="hospital in hospitales" :key="hospital" class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{hospital.nombre}}</h5>
        <p class="card-text">{{hospital.direccion}}</p>
        <p class="card-text">{{hospital.telefono}}</p>
        <router-link class="btn btn-primary" :to="'/hospital/'+hospital.idHospital">Detalles</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales'
const service = new ServiceHospitales()
export default {
 name: 'HomeComponent',
 data() {
 return {
    hospitales: []
 };
 },
 mounted(){
    service.getHospitales().then(result=> {
      this.hospitales=result;
    })
 }
};
</script>

<style scoped>

</style>