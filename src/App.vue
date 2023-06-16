<script >
import { RouterLink, RouterView } from 'vue-router'
export default {

methods: {
    isActiveRoute(routeName) {
      return this.$route.name === routeName;
    },
  }
  }
</script>

<template>
  <main>
    <nav>
      <h1>
        MTM
      </h1>
      <ul>
        <li :class="{ activeNav: isActiveRoute('Translate') }">
          <RouterLink :to="{ name: 'Translate' }">Trasnlate</RouterLink>
        </li>
        <li :class="{ activeNav: isActiveRoute('About') }">
          <RouterLink  :to="{name: 'About'}">About</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

$ff : 'Poppins', sans-serif;

@mixin flexBox($jc : center, $ai : center) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;

  a {
    color: #555;
    text-decoration: none;
  }
}

main {
  width: 100vw;
  height: 100vh;
  background-color: azure;
  font-family: $ff;
  overflow-x: hidden;

  nav {
    width: 40vw;
    height: 4rem;
    border-radius: 50px;
    margin: 1rem auto;
    @include flexBox($jc : space-between);
    padding: 0 2rem;
    background-color: beige;
    box-shadow: -1px 1px 10px 4px #00000021;
    h1{
      user-select: none;
    }
    ul {
      @include flexBox();
      gap: 4rem;
      height: 100%;
      width: fit-content;
      padding: 0 1rem;

      h1,
      li {
        cursor: pointer;
        position: relative;
      }
    }
  }
}

.activeNav {
  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: "";
    width: 105%;
    height: 4px;
    background-color: rgb(60, 252, 172);
  }
}
@media screen and (max-width:820px ){
  nav {
    width: 70vw !important;
  }
}
@media screen and (max-width:530px ){
  nav {
    width: 90vw !important;
    ul{
      gap: 2rem !important;
    }
  }
}
</style>
