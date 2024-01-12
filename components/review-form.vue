<script setup lang="ts">
import { ref } from 'vue'
interface IProps {
  isReply?: boolean
}

defineProps<IProps>()

const emits = defineEmits(['send'])
const text = ref('')

</script>

<template>
  <div>
    <h3 class="block text-gray-700 font-semibold mb-2">
      <template v-if="isReply">Ответить на отзыв</template>
      <template v-else>Написать отзыв</template>
    </h3>
  
    <textarea v-model="text" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>

    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      @click="emits('send', text)"
      type="button"
    >
      Отправить
    </button>
  </div>
</template>

<style scoped>

</style>
