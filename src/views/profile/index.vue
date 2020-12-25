<template>
  <div>
    <CustomText tag="h2">profile</CustomText>

    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Profile",
  components: {
    CustomText,
  },
};
</script>

<style scoped>
</style>