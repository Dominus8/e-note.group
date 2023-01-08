<template>
    <div class="e-cart">
        <h1>{{ title }}</h1>
        <router-link :to="{name:'catalog'}">
            <div class="e-catalog__link_to_cart">Back to catalog</div>
        </router-link>
        <p v-if="!CART.length">Ничего нет...</p>
        <e-cart-item
        v-for="(item, index) in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart = 'deleteFromCart(index)'
        />
    </div>
</template>
<script>
import eCartItem from './e-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'e-cart',
    components:{
        eCartItem
    },
    props:{
        cart_data:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            title: 'Cart'
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART'
    ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    },
    watch:{},
    mounted() {
    }
}
</script>
<style lang="scss">
    
</style>