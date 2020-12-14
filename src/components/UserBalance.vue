<template>
    <div id="UserBalance">
        <h2>{{username}}</h2>
        <h2>Tu saldo es: <span> {{balance}} COP </span> </h2>
    </div>
</template>

<script>
    import axios from 'axios';      //Traer el balance con axios de la capa logica
    export default {
        name: 'UserBalance',
        data: function (){
            return {
                username: "",
                balance: 0       //Se crea la variable balance
            }
        },
    
    created: function(){
        this.username = this.$route.params.username
        let self = this
        axios.get("https://cajero-app164.herokuapp.com/user/balance/" + this.username)  //Llama al backend con la URL
        .then((result) => {
            self.balance = result.data.balance
        })
        .catch((error) => {
            alert("ERROR Servidor");
        });
    }
}
</script>

<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }

    #UserBalance span{
        color: crimson;
        font-weight: bold;
    }
</style>