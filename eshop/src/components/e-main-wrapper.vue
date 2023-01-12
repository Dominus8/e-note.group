<template>
    <div class="e-main-wrapper">
            <router-view></router-view>

    </div>
</template>

<script>

export default{

    name:'e-main-wrapper',

    props:{},
    data(){
        return{
        }
    },
    computed:{

    },
    methods:{

    },
    watch:{},
    mounted() {

    }
}
</script>

<style >
    .e-main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>
