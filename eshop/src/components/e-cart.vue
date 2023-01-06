<template>
    <div class="e-cart">
        <h1>{{ title }}</h1>
        <eCartItem
    
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
        CART_DATA:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            title:'Cart item'
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