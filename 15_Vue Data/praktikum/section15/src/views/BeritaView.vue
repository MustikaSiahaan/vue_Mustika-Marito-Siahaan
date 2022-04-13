<template>
  <div class="news-wrapper">
    <input type="button" @click="logout" value="Logout">

    <ItemNews
      v-for="(data, index) in getNewsFromState"
      :key="index"
      :news="data"
    />
  </div>
</template>

<script>
import ItemNews from "@/components/ItemNews.vue";

export default {
  name: "NewsView",
  components: {
    ItemNews,
  },
  mounted() {
    this.getNews();
  },
  computed: {
    getNewsFromState() {
      return this.$store.state.news.lists;
    },
    getAuth() {
      return this.$store.state.auth.username;
    },
  },
  methods: {
    getNews() {
      
      this.$store.dispatch("news/fetchListNews");
    },
    logout() {
      console.log("logout");
      this.$store.dispatch("auth/logout");
      this.$router.push("Login");
    },
  },
};
</script>
