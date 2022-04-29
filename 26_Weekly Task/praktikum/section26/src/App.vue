<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Course
          </v-list-item-title>
          <v-list-item-subtitle>
            Section 1 -10
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>VUE JS - A</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Section 2 - Git',to: '/'},
          { title: 'Section 3 - UI/UX', to: '/section3' },
          { title: 'Section 4 - Figma', to: '/section4' },
          { title: 'Section 5 - HTML', to: '/section5' },
          { title: 'Section 6 - CSS', to: '/section6' },
          { title: 'Section 7 - Bootstrap', to: '/section7' },
          { title: 'Section 8 - Javascript', to: '/section8' },
          { title: 'Section 9 - Clean code', to: '/section9' },        
          { title: 'Section 10 - UI/UX', to: '/section10' },
          
        ],
    }),
  }
</script>