<template>
    <div class="e-cart-item">
        <img class="e-cart-item__image" :src="require('../assets/images/'+ cart_item_data.image)" alt="image">
        <div class="e-cart-item__info">
            <p>Наименование: {{cart_item_data.name}}</p>
            <p>Цена: {{cart_item_data.price}}</p>
            <p>Ариткул: {{cart_item_data.article}}</p>
        </div>
        <div class="cart_item_data__quantity">
           Количество: {{ cart_item_data.quantity }}
        </div>
        <button @click="deleteFromCart">Delete</button>
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
        },
        
    },
    data(){
        return{
           
            
        }
    },
    computed:{},
    methods:{        
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    },
    watch:{},
    mounted() {
        this.$props.cart_item_data['quantity'] = 1;
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