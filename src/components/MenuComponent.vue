<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">🏥 CRUD HOSPITALES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Hospitales</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/insert">Insertar hospital</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hospitales
          </a>
          <ul class="dropdown-menu">
            <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
            <li v-for="hospital in hospitales" :key="hospital" >
              <router-link class="dropdown-item" :to="'/hospital/'+hospital.idHospital">{{hospital.nombre}}</router-link>
            </li>
          </ul>
        </li>
        <form class="d-flex" role="search" @submit.prevent="buscarHospital()">
          <input class="form-control me-2" v-model="search" type="search" placeholder="Nombre" aria-label="Search">
           <router-link class="btn btn-outline-success" :to="'/titulo/'+search">Buscar</router-link>
        </form>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales'
const service = new ServiceHospitales();

export default {
 name: 'MenuComponent',
 data() {
 return {
   hospitales: []
 };
 },
 methods: {
  //  buscarHospital(){
  //    service.getNombreHospital(22).then(resu=>{
       
  //    })
  //  }
 },
 mounted(){
   service.getHospitales().then(resu=>{
     this.hospitales=resu;
   })
 }
};
</script>

<style scoped>

</style>