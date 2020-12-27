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
        <router-link to="/profile"> <Avatar :size="28" /> </router-link>
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
import Avatar from "@/components/Avatar";

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
    Avatar,
  },
};
</script>

<style scoped>
.header {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(var(--b6a));
}
.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
}
.search {
  display: none;
  @media (--t) {
    display: block;
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
}
.navigation {
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  border-top: 1px solid rgba(var(--b6a));
  @media (--t) {
    height: auto;
    border: 0;
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      margin-left: 20px;
    }
  }
}
</style>