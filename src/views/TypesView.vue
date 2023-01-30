<template>
  <div>
    <!-- <p>Types View</p> -->
    <!-- <p>{{jobs}}</p> -->
    <button @click="handleClick('title')">Order By title</button>
    <button @click="handleClick('id')">Order By id</button>
    <button @click="handleClick('address')">Order By address</button>
    <JobsList :jobs="jobs" :order="order"/>
   
    
  </div>
</template>
<script lang="ts">
  import { defineComponent,onMounted,ref,reactive } from 'vue'
//   import Job from '../types/jobs.ts'
import jobss from '../types/jobs'
import JobsList from "../components/JobsList.vue"
import OrderTerm from "../types/OrderTerms"
  export default defineComponent({
    components:{
    JobsList
    },
    
    setup(){
//         interface Job{
//     title:string,
//     id:number,
//     address:string | number
// }

const jobs = ref<jobss[]>([
    {title:'Intern',id:1,address:"Mohali"},
    {title:'Associate',id:2,address:"Hyderabad"},
    {title:'Solution architect',id:3,address:"Chennai"},
])
const myName = ref<string | number | boolean>("NagarjunSanam")
myName.value=true
const formData = reactive({
})
const order = ref<OrderTerm>('address')
const handleClick = (term:OrderTerm)=>{
  order.value =term

}


        onMounted(()=>{
            // console.log('Job',jobss)
            console.log("myName",myName.value)
        })
        return{
            jobs,
            formData,
            handleClick,
            order

        }
    }
    
  })
</script>