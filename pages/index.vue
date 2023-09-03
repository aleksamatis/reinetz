<script setup>
import { computed, watch } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { useRoute } from "#vue-router";
import Paginator from "~/components/Paginator.vue";
import { useBlogStore } from "~/store/blog";

const route = useRoute();

const store = useBlogStore();

const currentPage = computed(() => {
  const page = route.query?.page;
  return page ? parseInt(page) : 1;
});

onMounted(async () => {
  await store.fetchList(currentPage.value);
});

watch(currentPage, async (page) => {
  await store.fetchList(page);
});

const blogItems = computed(() => store.postsList?.items || []);
const totalPages = computed(() => store.postsList.pages?.total || 1);
</script>
<template>
  <HeaderComponent />
  <main v-if="blogItems.length" class="main">
    <div class="news-component__items">
      <div v-for="(item, idx) in blogItems" :key="idx">
        <div class="news-item">
          <img class="news-item__img" :src="item.image" />
          <h3 class="news-item__title">{{ item.title }}</h3>
          <div>{{ item.description }}</div>
          <nuxt-link to="item.link" class="news-item__btn">Читать</nuxt-link>
        </div>
      </div>
    </div>
    <Paginator
      :current-page="currentPage"
      :total-pages="totalPages"
      class="paginator"
    />
  </main>
  <div class="post"><nuxt-link to="post">Пост</nuxt-link></div>
  <FooterComponent />
</template>
<style lang="scss" scoped>
.main {
  margin: 30px auto;
  max-width: 1200px;
}

.paginator {
  margin-top: 30px;
}
.news-component__items {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin: -15px;

  > div {
    width: 33%;
    padding: 15px;
  }

  > div a {
    text-decoration: none;
  }
}

.news-item > * {
  margin-bottom: 8px;
}

.news-item > *:last-child {
  margin-bottom: 0;
}

.news-item__title {
  flex-grow: 1;
}

.news-item__img {
  width: 100%;
  height: auto;
}
.news-item__btn {
  display: inline-flex;
  padding: 10px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: black;
  color: white;
}
.post {
  font-size: 34px;
  padding: 20px;
}

@media screen and (max-width: 1200px) {
  .news-component__items {
    margin: 0 15px;
  }
}

@media screen and (max-width: 700px) {
  .news-component__items {
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
  }
}
</style>
