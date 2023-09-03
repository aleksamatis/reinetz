<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="text-component" v-html="block.data"></div>
</template>

<style lang="scss" scoped>
.text-component {
  margin: 0 auto;
  background-color: #add8e6;
  padding: 40px;
}

:deep(.text-component) {
  h2 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  p:last-of-type {
    margin-bottom: 15px;
  }
}
</style>
