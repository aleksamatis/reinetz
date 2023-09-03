<script setup>
import FormBlock from "../components/FormBlock.vue";
</script>

<template>
  <div class="footer-component">
    <div class="about-design">
      <img src="/images/logo.jpg" />
      <div class="text-description">
        Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и
        актуальные тенденции, раскрывая мир эстетики и креативности
      </div>
    </div>
    <div class="contacts">
      <div class="contacts-address">email</div>
      <div>Loremipsumd@gmail.com</div>
    </div>
  </div>
  <FormBlock />
</template>

<style lang="scss" scoped>
.footer-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 35px 30px;
  padding-bottom: 70px;
}
.about-design {
  max-width: 426px;
}
.contacts {
  max-width: 400px;
  color: white;
}

.contacts-address {
  font-size: 14px;
  color: gray;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.text-description {
  font-size: 14px;
  color: gray;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  padding-top: 20px;
}

@media screen and (max-width: 900px) {
  .footer-component {
    flex-wrap: wrap;
  }
}
</style>
