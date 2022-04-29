<template>
  <div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form @submit.prevent="OnSubmit">
        <input
          v-model="newTodo"
          name="todo"
          placeholder="todo-name"
          autocomplete="off"
        />
        <button>Add New Todo</button>
      </form>
    </div>
    <div class="todo-list">
      <input
        type="text"
        name="search"
        v-model="id"
        placeholder="search by id ..."
      />
      <button @click="OnSearch()">{{ text }}</button>
      <ul>
        <li v-for="item in apps_todos" :key="item.id" class="todo">
          <div class="content">
            <h5>
              <button>{{ item.id }}</button> {{ item.todo }}
            </h5>
          </div>
          <div class="content">
            <button @click="OnCompleted(item.id)" style="margin-right: 5px">
              Done
            </button>
            <button
              @click="
                edit
                  ? ((edit = false),
                    (form.index = item.id),
                    (form.todo = item.todo))
                  : ((edit = true),
                    (form.index = item.id),
                    (form.todo = item.todo))
              "
            >
              <span v-if="edit">Close</span>
              <span v-if="edit == false">Edit</span>
            </button>
          </div>
        </li>
        <div v-if="edit">
          <input type="text" name="edit" v-model="form.todo" />
          <button @click="OnUpdated">Update</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SUBSCRIPTION_TODO,
} from "@/graphql";

export default {
  name: "Todo",
  data() {
    return {
      apps_todos: [],
      old_todos: [],
      id: "",
      newTodo: "",
      text: "search",
      edit: false,
      form: {
        index: null,
        todo: null,
      },
    };
  },
  apollo: {
    $subscribe: {
      apps_todos: {
        query: SUBSCRIPTION_TODO,
        result({ data }) {
          this.apps_todos = data.apps_todos;
        },
      },
    },
  },
  methods: {
    async OnSubmit() {
      let newTodo = this.newTodo;
      await this.$apollo.mutate({
        mutation: ADD_TODO,
        variables: { todo: newTodo },
      });
      this.newTodo = "";
    },
    async OnCompleted(index) {
      const data = await this.$apollo.mutate({
        mutation: DELETE_TODO,
        variables: { id: index },
      });
      const id = data.data.delete_apps_todos.returning[0].id;
      this.old_todos = this.old_todos.filter((value) => value.id != id);
    },
    async OnUpdated() {
      let index = this.form.index;
      let todo = this.form.todo;
      await this.$apollo.mutate({
        mutation: UPDATE_TODO,
        variables: { id: index, todo: todo },
      });
      this.edit = false;
    },
    OnSearch() {
      if (this.old_todos.length == 0) this.old_todos = this.apps_todos;
      if (this.id == "") {
        this.apps_todos = this.old_todos;
      } else {
        this.apps_todos = this.apps_todos.filter(
          (value) => value.id == Number(this.id)
        );
      }
      if (this.text == "reset") {
        this.text = "search";
      } else {
        this.text = "reset";
      }
      this.id = "";
    },
  },
};
</script>

<style scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input {
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center;
}
.todo-form {
  margin-top: 30px;
}
.todo {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}
h5 {
  margin: 0px;
  padding: 0px;
}
li {
  list-style-type: none;
  width: 80%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216);
}
.content {
  flex: 1;
}
</style>
