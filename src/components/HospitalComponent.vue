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
   <router-link :to="'/update/'+this.$route.params.idhospital" class="btn btn-success">Editar</router-link>
    <button class="btn btn-danger" @click="eliminarHospital()">Eliminar</button>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import ServiceHospitales from './../services/ServiceHospitales';
const service = new ServiceHospitales();

export default {
 name: 'HospitalComponent',
 data() {
 return {
    hospital: {}, nombrehospital: null
    };
 },
 mounted(){
    service.getHospital(this.$route.params.idhospital).then(result=>{
        this.hospital=result;
    })
 },
// Para que actualice en la pagina, el hospital seleccionado en el "select"
 updated(){
     service.getHospital(this.$route.params.idhospital).then(result=>{
        this.hospital=result;
    })
 },
 methods: {
   eliminarHospital(){
              Swal.fire({
            title: '¿Estás seguro de que quieres eliminar el hospital nº '+this.$route.params.idhospital+'?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '##54FF72',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            service.deleteHospital(this.$route.params.idhospital).then(result=>{
            console.log(result);
            this.$router.push("/");
            })
            Swal.fire(   
            '¡Borrado!',
            'El hospital ha sido eliminado.',
            'success'
            )
        }
    })
   }
 }
};
</script>

<style scoped>

</style>