<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>

/**importacion de estilos  */
@import "./assets/css/styles.css";
</style>
