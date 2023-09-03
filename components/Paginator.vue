<script setup>
import { computed } from "vue";
import { useRoute } from "#vue-router";

const route = useRoute();

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

function getUrl(idx) {
  return {
    ...route,
    query: {
      page: idx,
    },
  };
}

const prevUrl = computed(() => {
  if (props.currentPage > 1) {
    return getUrl(props.currentPage - 1);
  }
  return undefined;
});

const nextUrl = computed(() => {
  if (props.currentPage < props.totalPages) {
    return getUrl(props.currentPage + 1);
  }
  return undefined;
});
</script>
<template>
  <div class="pagination">
    <nuxt-link :to="prevUrl">&lt;</nuxt-link>
    <nuxt-link
      v-for="idx in [...Array(totalPages).keys()]"
      :key="idx"
      :to="getUrl(idx + 1)"
      >{{ idx + 1 }}</nuxt-link
    >
    <nuxt-link :to="nextUrl">&gt;</nuxt-link>
  </div>
</template>
<style scoped>
.pagination {
  text-align: center;
}
.pagination a {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
}
</style>
