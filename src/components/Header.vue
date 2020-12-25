<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo"> Instagram </router-link>
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name == 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name == 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name == 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile"> Profile </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import IconDirect from "@/icons/direct.svg";
import IconDirectFill from "@/icons/direct-fill.svg";
import IconExplore from "@/icons/explore.svg";
import IconExploreFill from "@/icons/explore-fill.svg";
import Container from "@/components/Container";
export default {
  name: "MasterHeader",
  components: {
    IconHome,
    IconHomeFill,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
    Container,
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgba(var(--b6a));
}
.header-inner {
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
}
.search {
  text-align: center;
  input {
    border: 1px solid rgba(var(--b6a));
    border-radius: 3px;
    background: rgba(var(--b3f));
    width: 215px;
    height: 28px;
    padding: 0 20px;
  }
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    margin-left: 20px;
  }
}
</style>