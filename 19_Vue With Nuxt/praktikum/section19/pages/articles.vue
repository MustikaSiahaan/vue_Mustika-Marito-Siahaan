<template>
  <div>
    <NewsItemNews
    v-for="(list, index) in news"
    :key="index"
    :news="list"
    />
  </div>
</template>

<script>

export default {
  layout: "news",
  middleware: "auth",
  mounted() {
    this.getNews();
  },
  computed: {
    news() {
      return this.$store.state.news.lists;
    }
  },
  methods: {
    getNews() {
      this.$store.dispatch("news/getNews");
    }
  }
}

</script>
