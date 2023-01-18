<template>
  
  <section class="section">
    <article class="article">
      <h1 class="title">BIENTÔT DISPONIBLE </h1>

      <p class="description">
        Notre site Web est en construction, suivez-nous pour la mise à jour maintenant!
      </p>

      <form method="post" class="form">
        <input type="text" name="text" class="nom" placeholder="Nom" />
        <input type="email" name="email" class="email" placeholder="Entre une adress E-mail valide "/>
        <input type="submit" onclick="send" value="RESTER INFORME" class="btn"/>
      </form>

    </article>
  </section>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style scoped>

.section {
  width: 100%;
  height: 75%;
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.article {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.title  {
  text-align: center;
  font-weight: bold;
  color: #FFF;
  font-size: 9.2vw;
}
.description {
  text-align: center;
  font-weight: bold;
  color: #FFF;
  font-size: 2.3vw;
}
.form {
  width: 75%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

}
.nom {
  width: 25%;
  height: 50%;
  border-radius: 124px;
  font-size: 1.3vw;
  padding-left: 2%;
}
.email {
  width: 45%;
  height: 50%;
  border-radius: 124px;
  font-size: 1.3vw;
  padding-left: 2%;
}
.btn {
  width: 25%;
  height: 50%;
  border-radius: 124px;
  font-size: 1.3vw;
  background-color: #000;
  color: #FFF;
  transition: all 1s;
}
.btn:hover {
  transform: scale(1.02);
  background-color: #FFF;
  color: #000;
}
</style>