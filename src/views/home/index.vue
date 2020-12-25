<template>
  <div class="home">
    <CustomText tag="h2">Home</CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Home",
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.a1 {
  color: rgba(var(--ba8), 0.5);
}
.a2 {
  color: rgb(var(--b3f));
}
.a3 {
  color: rgb(var(--ba8));
}
</style>