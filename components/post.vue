<script setup lang="ts">
interface IProps {
  id?: string|number,
  img: string,
  title: string,
  text: string,
  date?: string,
  full?: boolean,
}

const props = defineProps<IProps>()

</script>

<template>
  <div>
    <div class="bg-white border border-gray-200 rounded-lg shadow">
      <img v-if="img" class="rounded-t-lg" :src="img" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
        
        <div class="mb-3 font-normal text-gray-700">{{ text }}</div>
        
        <div class="flex justify-between items-center">
          <div>
            <div v-if="full" class="text-sm text-gray-700">{{ date }}</div>
          </div>

          <router-link
            v-if="!full"
            :to="`/post/${ id }`"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Прочитать
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>