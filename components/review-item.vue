<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

export interface IReview {
  id: number,
  text: string,
  children?: IReview[],
  reply?: boolean,
}

defineProps<IReview>()

const emits = defineEmits(['reply'])

</script>

<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow p-5">
    <div class="font-normal text-gray-700">{{ text }}</div>

    <a
      v-if="reply"
      href="javascript:void(0)"
      class="text-sm text-blue-500 hover:underline"
      @click="emits('reply', id)"
    >Ответить</a>
    
    <slot />
  </div>
</template>
