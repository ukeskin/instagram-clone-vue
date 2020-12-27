<template>
  <div class="home">
    <div class="timeline">
      <Post />
      <Post />
      <Post />
    </div>
    <div class="sidebar">
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Home",
  components: { Post },
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