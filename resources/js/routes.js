const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');

//Se importan los componentes para el blog
const Mostrar = ()=> import('./components/blog/Mostrar.vue');
const Crear = ()=> import('./components/blog/Crear.vue');
const Editar = ()=> import('./components/blog/Editar.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'blogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'crarBlog',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editar',
        path: '/editar/:id',
        component: Editar
    },
];