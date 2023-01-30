<template>
    <div>
        <h1>Hello Typescript</h1>
        <p>{{name}} - {{age}}</p>
        <button @click="changeName('Sanam Nagarjuna')">Change Name</button>
        <button @click="changeAge('20')">Change Age</button>

        
    </div>
</template>
<script lang="ts">
  import { defineComponent,onMounted,ref } from 'vue'

  export default defineComponent({
    
    
    setup(){
     
        // const state = reactive({
        //     name:"Nagarjuna",
        //     age:20 as string | number
        // })
       
        onMounted(()=>{
            console.log("mounted")
        })

        // return{
        //    ...toRefs(state)

        // }
        const name = ref('Nagarjuna')
        // name.value = 3334
        const age = ref<string | number>(22)

        return{
            name,age
        }

    },
    methods: {
        changeName(name:string){
        console.log(this.name,name)
        this.name = name
        },
        changeAge(age:number){
        console.log(this.age,age)
        this.age = age
        }
        
    },

  })
</script>