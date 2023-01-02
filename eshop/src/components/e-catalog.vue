<template>
    <div class="e-catalog">
        <p>{{ title }}</p>
        <eCatalogItem/>
    </div>
</template>
<script>
import eCatalogItem from './e-catalog-item.vue';

export default {
    name:'e-catalog',
    components:{
        eCatalogItem
    },
    props:{},
    data(){
        return{
            title:'Catalog'
        }
    },
    computed:{},
    methods:{},
    watch:{},
    mounted() {
    }
}
</script>
<style>
    
</style>