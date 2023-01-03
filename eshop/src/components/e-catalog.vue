<template>
    <div class="e-catalog">
        <p>{{ title }}</p>
        <div class="e-catalog__list">
            <eCatalogItem/>
        </div>
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
<style lang="scss">
.e-catalog{
    &__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
    
</style>