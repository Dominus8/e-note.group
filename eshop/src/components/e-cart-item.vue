<template>
    <div class="e-cart-item">
        <img class="e-cart-item__image" :src="require('../assets/images/'+ cart_item_data.image)" alt="image">
        <div class="e-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart_item_data__quantity">
        <button>Delete</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'e-cart-item',
    components:{
    },
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            title:'Cartitem'
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
.e-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 grey;
    margin-bottom: 10px;  
    padding: 10px;
    &__image{
        max-width: 100px;
    }
}
    
</style>