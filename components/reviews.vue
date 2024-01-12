<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { type IReview } from './review-item.vue'

interface IProps {
  reviews: IReview[]
}

defineProps<IProps>()
const emits = defineEmits(['reply'])

</script>

<template>
  <div>

    <button
      type="button"
      class="mb-3 w-full p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      @click="emits('reply')"
    >Написать отзыв</button>

    <div
      v-for="review, parentIndex in reviews"
      :key="review.id"
      :class="{ 'mt-3': parentIndex }"
    >
      <review-item
        v-bind="review"
        @reply="emits('reply', $event)"
        reply
      >
        <div class="pt-5" v-if="review.children?.length">
          <div
            v-for="reviewReply, childIndex in review.children"
            :key="reviewReply.id"
            :class="{ 'mt-3': childIndex }"
          >
            <review-item v-bind="reviewReply" />
          </div>
        </div>
      </review-item>
    </div>
  </div>
</template>
