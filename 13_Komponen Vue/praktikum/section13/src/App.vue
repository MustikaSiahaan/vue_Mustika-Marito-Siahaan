<template>
  <div>
    <h2>Todo List</h2> 
      <list :todos="todos" @deleteList="deleteList"/>
      <input class="inputan" v-model="todo">
      <button @click="tambah">Tambahkan</button>
      <div v-if="todos.length >= 4">Hebat!</div>
  </div>
</template>

<script>
import List from './components/List.vue';

export default {
  components: {
     List 
  },
  data() {
    return {
      todo: "",
      todos: []   
    }
  },
  methods: {
    tambah(){
      this.todos.unshift(this.todo);
      this.todo="";
    },
    deleteList(todoIndex) {
      this.todos = this.todos.filter((item, index) => {
        if (index != todoIndex) {
          return item 
        }
        console.log(this.todos);
      })
    }
  }

}
</script>

<style>
.inputan{
  width: 90%;
}

</style>

