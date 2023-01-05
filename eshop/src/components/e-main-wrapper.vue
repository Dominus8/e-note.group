<template>
    <div class="e-main-wrapper">
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

<style >
    .e-main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>
