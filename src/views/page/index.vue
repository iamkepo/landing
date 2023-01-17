<template>
  
  <nav>
      <a href="https://iamkepo.github.io/portfolio/" class="anime"> 
        <h3>My Portfolio</h3>
      </a>
      <a href="https://pixelswar.herokuapp.com/"> 
        <h3>My Game: Pixel's War</h3>
      </a>
      <a href="https://zappe.herokuapp.com/"> 
        <h3>My E-service: Zappe</h3>
      </a>
      <a href="https://iamkepo.github.io/portfolio/#/contact"> 
        <h3>Me Contacter</h3>
      </a>
    </nav>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page",
};
</script>

<style scoped>

nav {
  width: 90%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}

a {
  width: 90%;
  height: 15%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  border: 2px solid #FFF; 
  color: #FFF;
  transition: 1s all;
}

a:hover {
  background-color: #FFF;
  color: #000;
}

.anime {
  animation: shake 1.5s  infinite;
}

.anime:hover {
  animation: none;
}  

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  2% { transform: translate(-1px, -2px) rotate(-1deg); }
  4% { transform: translate(-3px, 0px) rotate(1deg); }
  6% { transform: translate(3px, 2px) rotate(0deg); }
  8% { transform: translate(1px, -1px) rotate(1deg); }
  10% { transform: translate(-1px, 2px) rotate(-1deg); }
  12% { transform: translate(-3px, 1px) rotate(0deg); }
  14% { transform: translate(3px, 1px) rotate(-1deg); }
  16% { transform: translate(-1px, -1px) rotate(1deg); }
  18% { transform: translate(1px, 2px) rotate(0deg); }
  20% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>