<template>
    <div>
      <form @submit.prevent="addTodo" v-if="!editingTodo">
        <input v-model="newTodo" placeholder="Add a to-do"/>
        <button type="submit">Add</button>
      </form>
      <form @submit.prevent="updateTodo" v-else>
        <input v-model="editingTodo.text" placeholder="Edit the to-do"/>
        <button type="submit">Update</button>
        <button type="button" @click="cancelEditing">Cancel</button>
      </form>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{todo.text}}
          <button @click="editTodo(todo)">Edit</button>
          <button @click="removeTodo(todo)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, toRefs, Ref } from 'vue'
  
  interface Todo {
    id: number,
    text: string
  }
  
  export default defineComponent({
    setup() {
      const state = reactive({
        todos: [] as Todo[],
        newTodo: '',
        editingTodo: null as Todo | null
      })
  
      function addTodo() {
        state.todos.push({
          id: state.todos.length + 1,
          text: state.newTodo
        })
        state.newTodo = ''
      }
  
      function editTodo(todo: Todo) {
        state.editingTodo = todo
      }
  
      function updateTodo() {
        state.editingTodo = null
      }
  
      function cancelEditing() {
        state.editingTodo = null
      }
  
      function removeTodo(todo: Todo) {
        state.todos = state.todos.filter(t => t !== todo)
      }
  
      return {
        ...toRefs(state),
        addTodo,
        editTodo,
        updateTodo,
        cancelEditing,
        removeTodo
      }
    }
  })
  </script>
  