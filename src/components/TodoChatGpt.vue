<!-- <template>
    <div>
      <h1>My Todo List</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.get('text') }}
        </li>
      </ul>
      <form @submit.prevent="addTodo">
        <input v-model="newTodoText" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import Parse from 'parse';
  
  const Todo = Parse.Object.extend('Todo');
  const query = new Parse.Query(Todo);
  
  @Component
  export default class TodoList extends Vue {
    todos: any[] = [];
    newTodoText = '';
  
    async mounted() {
      this.todos = await query.find();
    }
  
    async addTodo() {
      const todo = new Todo();
      todo.set('text', this.newTodoText);
      await todo.save();
      this.todos.push(todo);
      this.newTodoText = '';
    }
  }
  </script>
   -->