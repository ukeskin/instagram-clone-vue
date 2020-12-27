<template>
  <div>
    <figure class="avatar">
      <img :src="src" :alt="alt" :width="size" :height="size" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://pbs.twimg.com/profile_images/1338274594449453057/FIgd_X6C_400x400.jpg",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.avatar {
  padding: 2px;
  border-radius: 999px;
  display: inline-flex;
  background: red;
}
img {
  border-radius: inherit;
  border: 2px solid white;
}
</style>