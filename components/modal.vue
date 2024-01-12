<script setup lang="ts">
interface IProps {
  modelValue: boolean
}

defineProps<IProps>()

const emits = defineEmits(['update:modelValue'])

function closeModal(): void {
  emits('update:modelValue', false)
}
</script>

<template>
  <transition name="modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-1000 overflow-auto p-4 bg-slate-500/50"
    >
      <div class="min-h-full flex items-center justify-center">
        <div class="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg relative">
          <button
            class="absolute top-2 right-2"
            @click="closeModal"
            type="button"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
