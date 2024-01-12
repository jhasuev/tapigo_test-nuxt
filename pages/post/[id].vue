<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = ref(route.params.id);

</script>

<template>
  <div class="post-page">
    <post
      img="https://picsum.photos/468/300"
      :title="`Title number ${id}`"
      :text="`Text number ${id}`.repeat(10)"
      date="12.01.2024"
      full
    />
  </div>
</template>

<style>

.post-page {
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px 15px;
  max-width: 500px;
  margin: auto;
}

</style>