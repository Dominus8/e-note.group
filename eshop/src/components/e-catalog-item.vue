<template>
    <div class="e-catalog-item">
        <img src="#" alt="image">
        <p>{{ title }}</p>
        <p>price: 100</p>
        <button class="btn">Add to cart</button>
    </div>
</template>
<script>
export default {
    name:'e-catalog-item',
    components:{
    },
    props:{},
    data(){
        return{
            title:'Catalog item'
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
.e-catalog-item{
    flex-basis: 25%;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 0 8px 0 grey;

}
.btn{
}
</style>