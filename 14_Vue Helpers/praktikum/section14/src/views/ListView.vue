<template>
<router-view>
  <div>
    <h1>Todo List</h1>
    <List />

  </div>
  </router-view>

</template>

<script>
import List from "./components/List.vue";
export default {
  name: "List",
  components: {
    List
  },
}
</script>