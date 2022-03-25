<template>
  <div>
    <ol>
      <li v-for="(Todo, index) in listTodo" :key="Todo.id">
        {{ Todo }}
     
        <button @click="editTodo(index)">Edit</button>
        <button @click="deleteTodo(index)">Delete</button>

        <input v-if="isEdit" v-model="editList" />
        <button v-if="isEdit" @click="buttonSave(index)">Save</button>
      </li>
    </ol>

    <input type="text" v-model="Todo" />
    <button @click="addTodo()">Tambahkan</button>
  </div>
</template>


<script>
export default {
  name: "List",
  data() {
    return {
      Todo: "",
      listTodo: [],
      isEdit: false,
      editList: "",
    };
  },
  methods: {
    addTodo() {
      this.listTodo.push(this.Todo);
      this.Todo = "";
    },

    deleteTodo(index) {
      this.listTodo.splice(index, 1);
    },

    editTodo() {
      this.isEdit = true;
    },

    buttonSave(index) {
      this.listTodo[index] = this.editList;
    },
  },
};
</script>
<style scoped>
</style>