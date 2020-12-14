<template>
    <div id="User">
        <h2>Hola <span> {{username}}, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>                        
    export default {
        name: "User",
        data:function(){     //funcion para validar si existe el usuario
            return {
                username: "none"
            }
        },
        created: function(){
            this.username = this.$route.params.username   //iguale el usuername suminstrado con el username precargado e intente retornarlo
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #User h2{
        font-size: 50px;
        color: #283747;
    }

    #User span{
        color: crimson;
        font-weight: bold;
    }
</style>