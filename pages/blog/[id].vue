<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "#vue-router";
import TextandImageBlock from "~/components/TextandImageBlock.vue";
import TextBlock from "~/components/TextBlock.vue";
import ImageandCaptionBlock from "~/components/ImageandCaptionBlock.vue";
import FormBlock from "~/components/FormBlock.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";

import { useBlogStore } from "@/store/blog";
const store = useBlogStore();

const route = useRoute();

onMounted(async () => {
  await store.fetchPost(route.params.id);
});

const data = computed(() => store.getPostById(route.params.id));
</script>

<template>
  <HeaderComponent />
  <main v-if="data" class="main">
    <div v-for="(item, idx) in data.body" :key="idx">
      <TextandImageBlock
        v-if="item.type == 'article_intro_block'"
        :block="item"
      />
      <TextBlock v-else-if="item.type == 'text_block'" :block="item" />
      <ImageandCaptionBlock
        v-else-if="item.type == 'image_block'"
        :block="item"
      />
      <FormBlock v-else-if="item.type == 'subscribe_form_block'" />
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped>
@media screen and (max-width: 900px) {
  .main {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
