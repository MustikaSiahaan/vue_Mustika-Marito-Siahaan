<template>
  <div class="item">
    <h1>Details</h1>
    <img :src="news.urlToImage" />

    <div class="title">{{ news.title }}</div>
    <div class="author">{{ news.author }}</div>
  </div>
</template>

<script>

export default {
  name: "DetailBerita",
  props: {
    news: Object,
  },
};
</script>

<style>

  img {
    width: 300px;
  }
  .item {
    margin-bottom: 30px;
  }
</style>
