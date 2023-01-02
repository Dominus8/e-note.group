<template>
    <div class="e-main-wrapper">
        <p>{{title}}</p>
        <eCatalog/>
        <eCard/>
    </div>
</template>

<script>
import eCatalog from './e-catalog.vue';
import eCard from './e-cart.vue'
export default{

    name:'e-main-wrapper',
    components:{
        eCatalog,
        eCard
    },
    props:{},
    data(){
        return{
            title:'Maim wrapper'
        }
    },
    computed:{},
    methods:{},
    watch:{},
    mounted() {
        console.log("Hello world it's mounted")
    }
}
</script>

<style scoped>
    .e-main-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
