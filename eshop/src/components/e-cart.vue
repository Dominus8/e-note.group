<template>
    <div class="e-cart">
        <h1>{{ title }}</h1>
        <e-cart-item
        v-for="item in cart_data"
        :key="item.id"
        :cart_item_data="item"
        />
    </div>
</template>
<script>
import eCartItem from './e-cart-item.vue'

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
    methods:{},
    watch:{},
    mounted() {
    }
}
</script>
<style lang="scss">
    
</style>