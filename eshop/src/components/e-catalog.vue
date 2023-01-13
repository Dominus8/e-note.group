<template>
    <div class="e-catalog">
        <h1>{{ title }}</h1>
        <e-select
            :selected="selected"
            :options="categories"
        />
        <router-link :to="{name:'cart'}">
            <div class="e-catalog__link_to_cart">Cart: {{ CART.length }}</div>
        </router-link>
        <div class="e-catalog__list">
            <eCatalogItem
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>
<script>
import eCatalogItem from './e-catalog-item.vue';
import eSelect from './e-select.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
    name:'e-catalog',
    components:{
        eCatalogItem,
        eSelect
    },
    props:{},
    data(){
        return{
            title:'Catalog',
            categories:[
                {name: 'All', value: 1},
                {name: 'Phones', value: 2},
                {name: 'communicators', value: 3}
            ]
        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),

        addToCart(data){
            this.ADD_TO_CART(data);
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
    &__link_to_cart{
        position: absolute;
        top: 10px;
        padding: 16px;
        border-radius: 5px;
        border: solid 1px grey;
    }
}
    
</style>