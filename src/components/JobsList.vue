<template>
    <div>
<P>JobList</P>
<!-- <p>{{jobs}}</p> -->
<ol>
    <li v-for="i in jobs" :key="i.address">
        <div>
            <h1>{{i.id}}-{{i.title}}</h1>
            <h3>{{i.address}}</h3>
        </div>
    </li>
    <li>{{order}}</li>
  </ol>
    </div>
</template>
<script lang="ts">
  import { defineComponent,PropType ,onMounted, computed} from 'vue'
  import Job from '../types/jobs'
  import OrderTerm from '../types/OrderTerms'
  export default defineComponent({
    props:{
        jobs:{
            required:true,
            type:Array as PropType<Job[]>
        },
        order:{
            require:true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props){
        onMounted(()=>{
         
        
            console.log("order",props.order)
            console.log('mountin.......')
        })

        // const orderedJobs = computed(()=>{
        //     return [...props.jobs].sort((a:Job,b:Job)=>{
        //        return a[props.order] > b[props.order] ? 1: -1
        //     })
        // })
        return{
            // orderedJobs

        }
    }
  })
</script>