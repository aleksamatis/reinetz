<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

const content = ref("");
</script>
<template>
  <HeaderComponent />
  <div class="main">
    <div>
      <h1>Создать новый пост</h1>
        <textarea :value="content"></textarea>
        <div><button class="post__btn">Сохранить</button></div>
    </div>
  </div>
  <FooterComponent />
</template>
<style lang="scss" scoped>
.main {
  background: black;
  padding: 50px;

  h1 {
    color: white;
    margin-bottom: 50px;
  }
  .post__btn {
    display: inline-flex;
    padding: 10px 50px;
    justify-content: center;
    width: 223px;
    height: 46px;
    align-items: center;
    border-radius: 2px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
  }
  > div {
    margin: 0 auto;
  }
}

textarea {
  width: 100%;
  min-height: 200px;
  background: black;
  border: 1px solid #888;
  margin-bottom: 15px;
  color: gray;
  padding: 5px;
}
</style>
