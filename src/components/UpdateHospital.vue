<template>
     <div style="width: 500px; margin: 0 auto" v-if="hospital">
         <br>
    <form method="post" v-on:submit.prevent="updateHospital()">
        <h3 style="color: red">Estás modificando el hospital: {{hospital.nombre}}</h3>
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
         <router-link :to="'/hospital/'+hospital.idHospital" class="btn btn-warning">
            <span aria-hidden="true">&larr;</span> Back
        </router-link>
        <button class="btn btn-outline-success">Editar</button>
    </form>
 </div>
</template>

<script>
import ServiceHospitales from './../services/ServiceHospitales';
const service = new ServiceHospitales();
const Swal = require('sweetalert2');

export default {
 name: 'UpdateHospital',
 data() {
 return {
     hospital: null
    };
 },
 mounted(){
    service.getHospital(this.$route.params.idhospital).then(result=>{
        this.hospital=result
    })
 },
 methods: {
    updateHospital(){
        Swal.fire({
            title: '¿Estás seguro de que quieres editar el hospital: '+this.hospital.nombre+'?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '##54FF72',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Editar'
        }).then((result) => {
        if (result.isConfirmed) {
            service.updateHospital(this.hospital).then(result=> {
                console.log(result);
            })
            Swal.fire(   
            '¡Editado correctamente!',
            'El hospital ha sido editado.',
            'success'
            )
            this.$router.push("/hospital/"+this.hospital.idHospital)
        }
    })
    }
 },
};
</script>

<style scoped>

</style>