<template>
    <nav>
        <v-toolbar class="green lighten-1">
        <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase white--text">
            <span class="font-weight-light">VueJS </span>
            <span>- a</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="green darken-1">
            <p>test</p>
        </v-navigation-drawer>
        
    </nav>
</template>

<script>

export default{
    data() {
      return {
          drawer : false
      }  
    }
}
</script>
