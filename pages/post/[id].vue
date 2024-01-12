<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import findParentById from '@/utils/findParentById'
import findMaxId from '@/utils/findMaxId'

const route = useRoute();

const id = ref(route.params.id);

const reviewsData = ref([
  {
    id: 1,
    text: 'Very Good!',
    children: [
      {
        id: 2,
        text: 'Thank you!',
      },
    ],
  },
  {
    id: 3,
    text: 'Very Very Very Good!',
    children: [],
  },
])

const replyingReviewId = ref(0)
const reviewModal = ref(false)

const onReply = (id: number) => {
  replyingReviewId.value = id
  reviewModal.value = true
}

const onSend = (text: string) => {
  const parentReviews = findParentById(reviewsData.value, replyingReviewId.value)
  const lastId = findMaxId(reviewsData.value)

  if(parentReviews) {
    parentReviews.children.push({
      id: lastId + 1,
      text: text,
    })
  } else {
    reviewsData.value.unshift({
      id: lastId + 1,
      text: text,
      children: [],
    })
  }

  replyingReviewId.value = 0
  reviewModal.value = false
}

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

    <div>
      <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900">Отзывы</h5>

      <reviews
        :reviews="reviewsData"
        @reply="onReply($event)"
      />
    </div>

    <modal
      :model-value="reviewModal"
      @update:model-value="reviewModal = false"
    >
      <review-form
        :is-reply="!!replyingReviewId"
        @send="onSend($event)"
      />
    </modal>
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