<template>
  <div class="layout">
    <header>
      <img src="../assets/img/IMG_20220414_083526_888.jpg" alt="profil"/>
      <h1>I AM KEPO</h1>
      <h2>KAKPO Christ-Amour Dieu-Merci</h2>
      <p>Full Stack JavaScript Engineer | Web & Mobile</p>
    </header>

    <router-view />

    <footer>copyright 2022</footer>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
};
</script>

<style scoped>
.layout { 
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: linear-gradient(to right, rgba(162, 0, 255, 0.705) , rgba(255, 0, 0, 0.705)) , url("../assets/img/IMG_20220102_120225_359.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8vh;
}
header{
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #FFF;
  text-align: center;
}

img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #FFF; 
}

footer{
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000;
}

footer:hover {
  color: #FFF;
}
</style>
