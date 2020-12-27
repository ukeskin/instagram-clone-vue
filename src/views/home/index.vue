<template>
  <div class="home">
    <div class="timeline">
      <p>lorem ipsum dolor sit amet, consectetur a yarakkkdip</p>
      <Avatar :size="80" />
    </div>
    <div class="sidebar">
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
export default {
  name: "Home",
  components: { Avatar },
};
</script>

<style scoped>
.home {
  max-width: 605px;
  margin: 0 auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>