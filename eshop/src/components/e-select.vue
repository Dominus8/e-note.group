<template>
    <div class="e-select">
<p 
    class="e-select__title"
    @click="areOptionsVisable = !areOptionsVisable"
>{{selected}}</p>
<div 
    class="e-select__options"
    v-if="areOptionsVisable"
>
    <span 
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
    >
        <p>
            {{ option.name }}
        </p>
    </span>
</div>        
    </div>
</template>

<script>

export default {
    name:'e-select',
    props:{
        selected:{
            type:String,
            default:''
        }

    },
    data(){
        return {
            areOptionsVisable:false,
            options:[
                {name: 'Option 1', value: 1},
                {name: 'Option 2', value: 2},
                {name: 'Option 3', value: 3},
                {name: 'Option 4', value: 4},
                {name: 'Option 5', value: 5},
                {name: 'Option 6', value: 6}
            ]
        }
        
    },
    methods:{

        selectOption(option){
        console.log(option);
        }
    }

}

</script>

<style>
.e-select__options p{
    margin: 0;
}

</style>