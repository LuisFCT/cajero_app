import vueRouter from 'vue-router'               //Importacion de una libreria

import User from './components/User'             //Importamos los componentes creados
import UserBalance from './components/UserBalance'
import App from './App'                         //Importamos la app

const router = new vueRouter({                  //definimos un nuevo router
    mode: 'history',                            //Tipo de router: historico
    base: __dirname,
    routes: [
        {
            path: '/',                          //Se define la ruta raiz
            name: "root",                       //se le da un nombre
            component: App                      //lo que se va a cargar: la App
        },
        {
            path: '/user/:username',            //Se define la ruta del componente user
            name: "user",
            component: User                     //lo que se va a cargar: componente User
        },
        {
            path: '/user/balance/:username',   //Se define la ruta del componente balance
            name: "user_balance",
            component: UserBalance             //lo que se va a cargar: componente UserBalance
        },
    ]
})
export default router   //Para poder utilizar router desde cualquier parte de la aplicación