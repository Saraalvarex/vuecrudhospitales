import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';

const routes = [
    {
        path: "/", component: HomeComponent        
    }
    // {
    //     path: "/insert/", component: InsertDepartamento
    // },
    // {
    //     path: "/detalles/:numero/:nombre/:localidad", component: DetallesDepartamento
    // },
    // {
    //     path: "/modificar/:id", component: UpdateDepartamento
    // },
    // {
    //     path: "/delete/:id", component: DeleteDepartamento
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
});

export default router;