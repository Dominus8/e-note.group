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
            @increment = 'increment(index)'
            @decrement = 'decrement(index)'
        />
        <div class="e-cart__total-price">
            <div class="total-price__title">
            <p>Total:</p>
            <p>{{cartTotalCost}}</p>  
            </div>

        </div>
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
        ]),
        cartTotalCost(){
            let result = []

            for (let item of this.CART){
                result.push(item.price * item.quantity)

            }
            let finishResult = 0;
            let sumWithInitial = result.reduce(
                (sum, el) => sum+el,finishResult
                );
            return sumWithInitial;
        }
    },
    methods:{

        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
    ]),
    increment(index){
        this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
        this.DECREMENT_CART_ITEM(index)
    },
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
.e-cart{
    &__total-price{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 16px;
        display: flex;
        justify-content: center;
        background-color: rgb(133, 174, 133);

        .total-price__title{
            margin-right: 16px;
            color:aliceblue;
            font-size: large;
        }
    }
}
    
</style>