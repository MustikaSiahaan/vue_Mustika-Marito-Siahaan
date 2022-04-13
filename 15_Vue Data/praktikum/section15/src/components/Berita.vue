<template>
  <div class="item">
    <img :src="news.urlToImage" />

    <div class="title">{{ news.title }}</div>
    <div class="author">{{ news.author }}</div>

    <router-link :to="{ name: 'DetailBerita', params: { title: news.title } }">Detail</router-link>
  </div>
</template>

<script>

export default {
  name: "Berita",
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
