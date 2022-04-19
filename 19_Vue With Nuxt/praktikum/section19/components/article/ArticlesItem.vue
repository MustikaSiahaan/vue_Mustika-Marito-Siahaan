<template>


  <div class="item">
    <span class="score">2</span>
    <div>
      <div class="title">{{ article.title }}</div>
      <div class="meta">author {{ article.author }}</div>
    </div>
  </div>


</template>

<script>
  export default {
    middleware: "auth",
    props: {
      news: Object,
    }
  }
</script>
