<template>
  <div class="layout">
    <header class="header">
      <img src="../assets/img/logo.png" alt="logo" class="logo">
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>

<style scoped>
@keyframes bounceOut {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.1);
  }
  100% { 
    transform: scale(1);
  }
}
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #397FAF;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  animation: bounceOut 1s ;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
}
.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>
