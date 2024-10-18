<template>
  <section class="bg-white">
    <div class="py-0 px-0 mx-12 lg:py-12">
      <div class="bg-gray-100 border border-gray-200 rounded-lg p-8 md:p-4">
        <h1 class="text-gray-900 text-5xl md:text-3xl font-bold mb-3">
          {{ props.header }}
        </h1>
        <p class="text-lg font-normal text-gray-500 mb-2">
          {{ props.subHeader }}
        </p>
      </div>
    </div>  
  </section>
</template>

<script setup>
const props = defineProps({
  header: String,
  subHeader: String
})
</script>