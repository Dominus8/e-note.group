<template>
    <div class="e-cart">
        <h1>{{ title }}</h1>
        <e-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart = 'deleteFromCart(index)'
        />
    </div>
</template>
<script>
import eCartItem from './e-cart-item.vue'
import { mapActions } from 'vuex'

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
    computed:{},
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