<template>
  <div id="app">
      <ol>
        <li v-for="item in list" :key=item.id>
          {{ item }}
        </li>
      </ol>
      <input type="text" v-model="visi"/>
      <button @click="listVisi">Tambahkan</button>
      <div v-if="list.length >= 4">Hebat!</div>      
  </div>
</template>

<script>
export default {
    data() {
      return{
        visi: '',
        list: []
    }
  },
    methods: {
      listVisi(){
        this.list.push(this.visi)
        this.visi = ''

      }
    }
}
</script>


