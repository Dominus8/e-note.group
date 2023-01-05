<template>
    <div class="e-catalog">
        <h1>{{ title }}</h1>
        <div class="e-catalog__list">
            <eCatalogItem
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @sendArticle="showCildArticleInConcole"
            />
        </div>
    </div>
</template>
<script>
import eCatalogItem from './e-catalog-item.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    name:'e-catalog',
    components:{
        eCatalogItem
    },
    props:{},
    data(){
        return{
            title:'Catalog',
        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS'
        ]),
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),

        showCildArticleInConcole(data){
            console.log(data);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
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