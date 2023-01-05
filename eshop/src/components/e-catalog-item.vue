<template>
    <div class="e-catalog-item">
        <img class="e-catalog-item__image" :src="require('../assets/images/'+ product_data.image)" alt="image">
        <div class="e-catalog-item__name">{{ product_data.name }}</div>
        <div class="e-catalog-item__price">Price: {{ product_data.price }} руб.</div>
        <div class="e-catalog-item__article">{{ product_data.article }}</div>
        
        <button class="e-catalog-item__btn btn" @click="sendDataToParret">Add to cart</button>
    </div>
</template>
<script>
export default {
    name:'e-catalog-item',
    components:{
    },
    props:{
        product_data:{
            default(){
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    computed:{},
    methods:{
        sendDataToParret(){
            this.$emit('sendArticle', this.product_data.article)
        }
    },
    watch:{},
    mounted() {
    }
}
</script>

<style lang="scss">
.e-catalog-item{
    flex-basis: 25%;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 0 8px 0 grey;
    &__image{
        max-width: 100px;
    }

}

</style>