<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Books</h1>
    <p>{{bookDetails}}</p>
    <p>power of {{number}} is {{computedNumber}}</p>
    <!-- <p>{{number}} = power of {{computedNumber}}</p> -->
    <input placeholder="Enter a Number" v-model="number" /> <br />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive,ref, computed,onMounted } from "vue";
import Book from "../types/book";
import Employee from '../types/intersection'
export default defineComponent({
  setup() {
  
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
console.log(e)

    const bookDetails: Book = reactive({
      name: 'Mathematics',
      pages: 100,
      author: true
    });
    const empData = ref<Employee[]>([{ id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'}])
    const number = ref<number>(23)
      const el = ref<HTMLInputElement | null>(null)
    const computedNumber = computed<number>(()=>{
      return number.value* number.value
    })
    onMounted(()=>{
      el.value?.focus()
      console.log("empData",empData.value)

    })
    return {
      bookDetails,
      number,
      computedNumber,
      el,
      empData
    };
  }
});
</script>
