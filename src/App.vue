<template>
  <div id="app" class="w-screen h-screen flex flex-col">
    <Navbar />
    <main class="h-screen w-screen bg-gray-800 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {Navbar}
};
</script>
