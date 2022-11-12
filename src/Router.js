import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import HospitalComponent from './components/HospitalComponent.vue';
import UpdateHospital from './components/UpdateHospital.vue';
import InsertHospital from './components/InsertHospital.vue'
const routes = [
    {
        path: "/", component: HomeComponent        
    },
    {
        path: "/hospital/:idhospital", component: HospitalComponent
    },
    {
        path: "/insert/", component: InsertHospital
    },
    {
        path: "/update/:idhospital/", component: UpdateHospital
    }
    // {
    //     path: "/delete/:id", component: DeleteDepartamento
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
});

export default router;