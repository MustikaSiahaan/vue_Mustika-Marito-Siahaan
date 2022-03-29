<template>
<router-view>
  <div id="app">
    <h1>Todo List</h1>
    <List />
    <router-link to="/detail">
    Detail
        {{ todo }}
    </router-link>
  </div>
  </router-view>

</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List
  },
}
</script>

