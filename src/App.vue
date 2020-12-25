<template>
  <div class="app">
    <MasterHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import MasterHeader from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    MasterHeader,
  },
};
</script>

<style scoped>
.main {
  padding-top: 40px;
}
</style>