<script setup lang="ts">
</script>

<template>
  <div class="posts">
    <post
      v-for="i in 10"
      :key="i"
      :id="i + 1"
      img="https://picsum.photos/468/300"
      :title="`Title number ${i + 1}`"
      :text="`Text number ${i + 1}`.repeat(10)"
      date="12.01.2024"
    />
  </div>
</template>

<style>

.posts {
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px 15px;
  max-width: 500px;
  margin: auto;
}

</style>